// moduels import database and map


const database = require('../databasecfg.js');
const mapr = require('./mapr.js');

module.exports = {
  
    get: function(id) {
    
    let queriy = database('p');

    if (id) {
      queriy.where('p.id', id).first();

      const promises = [queriy, this.getProjectActions(id)];

      return Promise.all(promises).then(function(results) {
        
        let [project, actions] = results;
        
        project.actions = actions;


        return mapr.projectToBody(project);
      });
    }

    return queriy.then(projects => {
   
        return projects.map(project => mapr.projectToBody(project));
   
    });
  },



  getProjectActions: function(projectId) {
    
    return database('actions')
    
    .where('project_id', projectId)
    
      .then(actions => actions.map(action => mapr.actions(action)));
  },

  // Add

  insert: function(project) {
    return database('projects')
      
    .insert(project)
      
      .then(([id]) => this.get(id));
  },

// Update

  update: function(id, changes) {
   
    return database('projects')
   
    .where('id', id)
   
      .update(changes)
   
   
      .then(count => (count > 0 ? this.get(id) : null));
  },


  // Remove

  remove: function(id) {
    return database('projects')
      .where('id', id)
      .del();
  },
};