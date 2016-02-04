var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);

UserSchema.path('name').required(true, "Name is required");