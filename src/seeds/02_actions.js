exports.seed = function(knex, Promise) {
    // Remove

    return knex("actions")

    .del()

    .then(function() {
            
        // Adding



            return knex("actions").insert([
                {
        
                    project_id: 1,

        
                    description: "Unknown",

                    notes: 
                    'Lets make note taking to help rememeber what you learn'
        
                },


                {
                    project_id: 1,


                    
                        description: "Yarn Npm package managers",
                        notes: 'Do a yarn install or yarn add to add to current projects',

                
                },


                
                {
                    project_id: 1,


                    
                    description: "Make Api/s", 
                    notes: 'Api is are the future to control the WEB',


                }
            ]);
            
        });
};
