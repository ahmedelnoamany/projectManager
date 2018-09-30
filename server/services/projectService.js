const mongoose = require('mongoose');

const Project = mongoose.model('project');


function findProject({ id }) {
  return Project.findById(id, (err, project) => {
    if (!project) { throw new Error('No project found with this ID')}
    resolve(project);
  });
}

//Create a new project
function createProject({ name, dueDate, priority }) {
  const project = new Project({ name, dueDate, priority });
  if(!name || !dueDate || !priority) {
    throw new Error('Insufficient arguments to create project');
  }
  let id = project.id;
  
  return new Promise((resolve, reject) => {
    Project.findOne({ id })
    .then(existingProject => {
      if (existingProject) { throw new Error('A project already exists with this ID')}
      return project.save();
    })
    .then(project => {
      resolve(project);
    })
  });
}


module.exports = { createProject, findProject }; 