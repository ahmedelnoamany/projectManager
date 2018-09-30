const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  dueDate: Date,
  priority: Number
});

mongoose.model('project', ProjectSchema);