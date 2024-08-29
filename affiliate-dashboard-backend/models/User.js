const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  occupation: { type: String, enum: ['Student', 'Professional', 'Social Media Influencer', 'Marketing Agent'], required: true },
});

module.exports = mongoose.model('User', userSchema);
