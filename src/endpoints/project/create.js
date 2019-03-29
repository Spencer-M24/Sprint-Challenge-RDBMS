
const express = require('express');

const projectDb = require('../../database/project.js');

const validators = require('../../validators/project/create.js');



module.exports = {

    type: 'POST',

    url: '/',
	handler: (req, res) => {
    

        const {name, description, finished} = req.body;

        
        
        let newProject = {
          
        
            
        
            name: name,
          
        
            description: description,
          
        
              finished: finished,
	  	}
		const newKeys = Object.keys(newProject);
        
        const validations = newKeys.map(key => validators[key](newProject));
        
        Promise.all(validations).then(() => {
			projectDb.insert(newProject)
    
         
            .then(id => {
        
                res.status(201).json(id);
			  })
        
              .catch(err => {
                
                
                res.status(500).json({ error: "Error occured." });
        
            });
		}).catch(err => res.status(err.statusCode || 500).json(err.stack));
	}
}