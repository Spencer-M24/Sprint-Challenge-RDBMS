exports.seed = function(knex, Promise) {
   
    return knex("projects")
        
    .del()
        
        .then(function() {
            
            return knex("projects").insert([
                {
                    
                    name: "Node/Express Javacript",
                    
                    description:
                        
                    'Making An Api using the Tools of Node.js/express using Javascript'
                }
   
            ]);
   
        });
};
