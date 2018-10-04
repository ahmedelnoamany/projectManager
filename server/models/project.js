const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  dueDate: Date,
  priority: Number,
  client: String,
  ownerID: String
});

module.exports = mongoose.model('project', ProjectSchema);