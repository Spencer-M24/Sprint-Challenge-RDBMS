const express = require('express');
const projectDb = require('../../database/project.js');
const validators = require('../../validators/project/update.js');

module.exports = {
	type: 'PUT',
	url: '/:id',
	handler: (req, res) => {
		
		const {name, description, finished} = req.body;
		
		const {id} = req.params;
		

		let modifiedProject = {
	  		name: name,
	  		description: description,
		
			  
			
		
			  finished: finished,
	  	}
		
		  const changedKeys = Object.keys(modifiedProject);
		
		const validations = changedKeys.map(key => validators[key](modifiedProject));
		
		Promise.all(validations).then(() => {
		
			projectDb.update(id, modifiedProject)
		
			.then(response => {
				
					if(response === null){
						
						res.status(404).json({message: "Project not found."});
					}else{
					

						res.status(200).json(response);
					}
		






				})
		
				.catch(err => {
		
					res.status(500).json({ error: "Project cant Obtain." });
		
				})
		})
		.catch(err => res.status(err.statusCode || 500).json(err.stack));

	}
} 