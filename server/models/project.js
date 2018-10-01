const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String },
  dueDate: { type: Date},
  priority: { type: Number },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
});

mongoose.model('project', ProjectSchema);