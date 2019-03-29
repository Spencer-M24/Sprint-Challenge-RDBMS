exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('projects', function(projects) {
    
        projects.increments();
  
        
      projects.string('name', 128).notNullable();
      
      projects.text('description').notNullable();
      
  
      projects.boolean('finished').defaultTo(false);
  
    });
  };
  
  
  
  exports.down = function(knex, Promise) {
   
    
    return knex.schema.dropTableIfExists('projects');
  };