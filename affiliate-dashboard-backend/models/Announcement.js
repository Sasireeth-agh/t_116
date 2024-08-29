const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  targetGroup: { type: String, enum: ['all', 'students', 'professionals', 'marketingAgents'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Announcement', announcementSchema);
