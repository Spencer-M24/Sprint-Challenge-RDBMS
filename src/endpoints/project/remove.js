const express = require('express');

const projectDb = require('../../database/project.js');

const validators = require('../../validators/action/create.js');

module.exports = {

	type: 'DELETE',

	url: '/:id',
	handler: (req, res) => {

		projectDb.get(req.params.id)

		.then(project => {

			if (project != undefined) {

				projectDb.remove(req.params.id)

				.then(numRemoved => {

					if(numRemoved === 1){

						res.status(202).json({message: "Project  deleted."});

					}else{

						res.status(202).json({message: "Worked but not object deletion."});

					}

				})

				.catch(err => {
		  			res.status(500).json({ error: "Error cant be removed." });
				  })
				  ;


			}else{

				res.status(404).json({ message: "Current Id not exisitent ." });

			}

		})

		.catch(err => {
			res.status(500).json({ error: "Try Again error cant be obtain.." });
		})
	}
}
    
