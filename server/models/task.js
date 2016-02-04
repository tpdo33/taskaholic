var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	user: { type: String, trim: true },
	task: { type: String, trim: true },
	likes: {type: Number, trim: true },
	deadline: {type: Date, trim: true},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Task', TaskSchema);

TaskSchema.path('deadline').required(true, "deadline must be provided");
TaskSchema.path('user').required(true, "User must be logged in to post a task");
TaskSchema.path('task').required(true, "task is required");