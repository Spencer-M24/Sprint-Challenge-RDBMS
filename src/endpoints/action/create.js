const express = require('express');

const actionDb = require('../../datbase/actions.js');

const projectDb = require('../../database/projects.js');



const validators = require('../../validators/action/create.js');

module.exports = {
	type: 'POST',
    
    url: '/',

    handler: (req, res) => {

        const {project_id, description, notes, finished} = req.body;

        let newAction = {
	  		project_id: project_id,
      
              description: description,
      
              notes: notes,
      
              finished: finished
	  	}
		const newKeys = Object.keys(newAction);
        
        const validations = newKeys.map(key => validators[key](newAction));
        
        Promise.all(validations).then(() => {
        
            projectDb.get(project_id)
       
            
            .then(project => {
				if(project != undefined){
        
        
                    actionDb.insert(newAction)
        
                    .then(id => {
        
        
                        res.status(201).json(id);
        
                    })
					  .catch(err => {
						res.status(500).json({ error: "There was an error while saving the action to the database." });
                
                
                
                    });
            
            
            
            
                    }else{
            
            
                    res.status(400).json({ error: "Vaild Id required." });
				}
        
        
        
            })
        
            .catch(err => {
				res.status(500).json({ error: "cant gain informatiion." });
			})
		}).catch(err => {
			res.status(err.statusCode || 500).json(err.message);
		});
	}
}
    
