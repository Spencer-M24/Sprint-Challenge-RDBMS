const express = require('express');
const actionDb = require('../../database/actions.js');

module.exports = {


    type: 'GET',
	url: 's/',




    handler: (req, res) => {

        
        actionDb.get()
    
    
    
        .then(actions => {

            
            res.status(200).json(actions);
    
    
        })
         
         
          .catch(err => {
        
        
              res.status(500).json({ error: "Could not retrieve actions." });
    
    
        })
	}
} 
