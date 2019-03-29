// moduels imports

const database = require("../databasecfg.js");

const mappers = require("./mapr");

module.exports = {
   
    get: function(id) {
    
        let queriy = database("actions");

        if (id) {
            return queriy
   
            .where("id", id)
                
                .first()
                
                .then(action => mapr.actions(action));
        }

        return queriy.then(actions => {
     
            return actions.map(action => mapr.actions(action));
        });
    },
    // Add  in
    insert: function(action) {
     
    
        return database("actions")
    
        .insert(action)
     
    
            .then(([id]) => this.get(id));
    },
    
    // Update where from
    
    update: function(id, changes) {
     
        return database("actions")
     
        .where("id", id)
    
        .update(changes)
     

            .then(count => (count > 0 ? this.get(id) : null));
    },

    // Delete Remove

    remove: function(id) {
    
        return database("actions")
    
        .where("id", id)
    
        .del();
    }
};
