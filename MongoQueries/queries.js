//map reduce to get give a summary of points scored against a team
db.players.mapReduce(
	function() { 
		var team = this.fixture_history.summary[0][1].substring(0, 3);
		emit(team, this.fixture_history.summary[0][2]); 
		},
	function(key, values) { return Array.sum(values)},
	{
		out: "points_against"
	}
)

//map reduce to get the mean, std, min, max of points scored in each position
db.players.mapReduce(
	function map(){
		emit(this.type_name, {sum: this.total_points, min: this.total_points, max: this.total_points, count: 1, diff: 0});
	},
	function reduce(key, values) {
		var result = values[0]; //reduce into here
		for(var i=1; i < values.length; i++) {
			var currentValue = values[i];

			var delta = (result.sum/result.count) - (currentValue.sum/currentValue.count);
			var weight = (result.count * currentValue.count)/(result.count + currentValue.count);

			result.diff += currentValue.diff + (delta * delta * weight);
			result.sum += currentValue.sum;
			result.count += currentValue.count;
			result.min = Math.min(result.min, currentValue.min);
			result.max = Math.max(result.max, currentValue.max);
		}
		return result;
	},
	{
		query: {minutes: {$gt: 0}},
		out: "avg_points_position",
		finalize: function finalize(key, value) {
					value.avg = value.sum/value.count;
					value.variance = value.diff/value.count;
					value.stddev = Math.sqrt(value.variance);
					return value;
				}
	}	
)
//find hidden gem players for a given postion. Hidden gem is player who has low select, but scores > average points.
db.players.find({
	type_name: "Midfielder",
	total_points: {$gt: 5.8},
	selected_by_percent: {$lt: 10}
}, {web_name:1});

//query to convert selected_by_percent from a string to a float
db.players.find().forEach(function(x) {
	db.players.update({_id: x._id}, {$set: {selected_by_percent: parseFloat(x.selected_by_percent)}})
});