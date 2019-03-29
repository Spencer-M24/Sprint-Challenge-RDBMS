const express = require('express');
const projectDb = require('../../database /project.js');

module.exports = {
	type: 'GET',
	url: '/:id',
	handler: (req, res) => {
		
		const { id } = req.params;
		
		projectDb.get(id)
		
		.then(project => {
		  	if(project != undefined){
		
				res.status(200).json(project);
		
			}else{
		
		
				res.status(404).json({ error: "Project not found."});
		
			}
		
		})
		
		.catch(err => {
		
		
			res.status(500).json({ error: "Could not retrieve project." });
		
		});
	}

} 
