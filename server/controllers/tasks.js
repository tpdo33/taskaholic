var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = (function() {
	return {
		allTasks: function(req, res) {
			Task.find({}, function(err, data) {
				if(err) {
					console.log(err);
				} else {
					res.json(data);
				}
			});
		},

		addTask: function(req, res){

			var newTask = new Task({
				user: req.body.user.name,
				task: req.body.content,
				deadline: req.body.deadline,
				likes: 0,
				created_at: new Date(),
				updated_at: new Date()
			});

			if (newTask.created_at < newTask.deadline){
				newTask.save(function(err, data){
					if(err) {
						console.log(err);
					} else {
						res.json(data);	
					}
				});
			} else {
				res.json({error: 'Deadline cannot be set before the current date'})
			}

		},

		removeTask: function(req, res){
			Task.remove({_id: req.params.id}, function(err, success){
				if(err){
					console.log(err);
				} else {
					res.json(success);
				}
			});
		},

		likeTask: function(req, res){
			Task.update({_id: req.params.id}, {$inc: {likes : 1}}, function(err, success){
				if(err){
					console.log(err);
				} else {
					res.json(success);
				}
			})
		},

		getTask: function(req, res){
			Task.findOne({_id: req.params.id}, function(err, task){
				if(err){
					console.log(err);
				} else {
					res.json(task);
				}
			})
		}
	}

})();