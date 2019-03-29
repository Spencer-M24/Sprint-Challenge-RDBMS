// imports

const express = require('express');

const ValidationError = require('../validationError'); 

module.exports = {
	description: ({description}) => {
   
        if (description === '' || typeof description != "string" || description.length > 128 ) {
   
            throw new ValidationError('Description Text Required');
    }
   
    return true;
    
},

notes: ({notes}) => {

    if (notes === '' || typeof notes != "string") {

        throw new ValidationError('Text Required.');

    }

    return true;
    },
    
    finished: ({finished}) => {
        
        if (finished != undefined && typeof finished != "boolean") {
     

     
            throw new ValidationError('Project finished invalid.');
        }
     
        return true;
      },
     


      project_id: ({project_id}) => { if (typeof project_id != 'number'){
          
          

            throw new ValidationError('Vaild Project id required.');
        }
        
        return true;
      }
    }; 