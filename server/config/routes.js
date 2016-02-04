var users = require('./../controllers/users.js');
var tasks = require('./../controllers/tasks.js');

module.exports = function(app) {

	app.get('/allUsers', function(req, res) {
		users.allUsers(req, res);
	});

	app.post('/addUser', function(req, res){
		users.addUser(req,res);
	});

	app.post('/addTask', function(req, res){
		tasks.addTask(req,res);
	});

	app.get('/getTask/:id', function(req, res){
		tasks.getTask(req,res);
	});

	app.get('/getAll', function(req, res){
		tasks.allTasks(req, res);
	});

	app.delete('/deleteTask/:id', function(req, res){
		tasks.removeTask(req, res);
	});

	app.put('/likeTask/:id', function(req, res){
		tasks.likeTask(req,res);
	})

};