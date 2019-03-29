// Moduels

const express = require('express');

const server = express();

const requireAll = require('require-all');

let = require('lodash');

server.use(express.json());


// add your server code starting here
server.listen(5000, () => 

console.log('Testing Worked?'));

process.setMaxListeners(0);

const handles = requireAll(__dirname + '/src/endpoints');

_.each(handles, (endpoints, handle) => {

    _.each(endpoints, (definition, endpoint) => {


        server[definition.type.toLowerCase()](

            
            `/api/${handle}${definition.url}`, 


            definition.handler
    );
  });
});