// IMports

 
const express = require('express');
 
const actionDb = require('../../datbase/action.js');

const projectDb = require('../../databaseb/project.js');

const validators = require('../../validators/action/update.js');


module.exports = {

    type: 'put',

    url: '/:id',

    handler: (req, res) => {
        
        const {project_id, description, notes, finished} = req.body;
        
        
        const {id} = req.params;
        

        let modifiedAction = {
          

            description: description,
        
            
        
            notes: notes,
          
        
            finished: finished,
          
        
            project_id: project_id
	  	}
        
          const changedKeys = Object.keys(modifiedAction);
        
        
        const validations = changedKeys.map(key => validators[key](modifiedAction));
        
        Promise.all(validations).then(() => {
        
            projectDb.get(project_id)
        
        
            .then(project => {
        
                if(project != undefined){
        
                    actionDb.update(id, modifiedAction)
        
                    .then(response => {
        
                        if(response === undefined){
        
                            res.status(404).json({message: "Action not found."});
                        
                        }else{
        

                        
                            res.status(200).json(response);
                        
                        }
					})
        
                    .catch(err => {
                        
                        res.status(500).json({ error: "Inforomaiton can not obtain." });
        
                        
                    });
        
        
                }else{
        
                    res.status(400).json({ error: "Please provide valid project ID." });
        
                }
        
            })
			.catch(err => {
        
                res.status(500).json({ error: "Cant not obtian error" });
			})
        
        }).catch(err => res.status(err.statusCode || 500).json(err.message));
	}
} 