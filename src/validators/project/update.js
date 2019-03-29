// IMports Moduels

const express = require('express');

const ValidationError = require('../validationError'); 


module.exports = {

    name: ({name}) => {

        if (name === '' || typeof name != "string" || name.length > 128) {

            throw new ValidationError('Error not Vaild Name.');

        }

        return true;

    },

    description: ({description}) => {

        if (description === '' || typeof description != "string") {
    		throw new ValidationError('Text Decription REquired.');
    	}
    	return true;
	},
    
    finished: ({finished}) => {
        
        if (typeof finished != "boolean") {
            
            throw new ValidationError('Project finished invlaid.');
    	}
        
        return true;
    }
}; 