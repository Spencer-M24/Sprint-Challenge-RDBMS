const express = require('express');
const ValidationError = require('../validationError'); 

module.exports = {
    
    
    description: ({description}) => {
        
        
        if (description === '' || typeof description != "string" || description.length > 128 ) {
    

            
    
    
            throw new ValidationError('Provide Vaild Decription .');
    
        }
    
        return true;
	},
	notes: ({notes}) => {


        if (notes === '' || typeof notes != "string") {


            
            throw new ValidationError('Text Decription');

        }

        return true;

    },


    finished: ({finished}) => {

        if (typeof finished != "boolean") {

        throw new ValidationError('Project finished invalid.');

    }

    return true;
  
},
  
  project_id: ({project_id}) => {
  
    if (typeof project_id != "number") {
  
        throw new ValidationError('ID Invaild.');
  
    }
  
    return true;
  }


}; 