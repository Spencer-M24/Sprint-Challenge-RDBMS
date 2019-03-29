// Setup Soon Moduels

module.exports = {
    intToBoolean,
    
    booleanToint,
    

    projects,
    


    actions
};

function intToBoolean(int) {

    
    return int === 1 ? true : false;
}

function booleanToint(bool) {


    return bool === true ? 1 : 0;
}

function projects(project) {

    const result = {
        
   
   
        ...project,


       
        completed: intToBoolean(project.completed)
    };

    if (project.actions) {
        
        result.actions = project.actions.map(action => ({
        
            ...action,
        
            completed: intToBoolean(action.completed)
        }));
    }

    return result;
}

function actions(action) {
    
    return {
    
    
        ...action,
    
        completed: intToBoolean(action.completed)
    };
}
