var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		allUsers: function(req, res) {
			User.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		addUser: function(req, res){

			var newUser = new User({
				name: req.body.name,
				created_at: new Date(),
				updated_at: new Date()
			});

			console.log(newUser);

			newUser.save(function(err, data){
				if(err) {
					console.log(err);
				} else {
					res.json(data);	
				}
			});

		}
	}

})();