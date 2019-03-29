// Example


// // The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//     constructor(message) {
//       this.message = message;
//       this.name = "Error"; // (different names for different built-in error classes)
//       this.stack = <nested calls>; // non-standard, but most environments support it
//     }
//   }


module.exports = class ValidationError extends Error {
    
    constructor(message) {
    
        super(message);
    
        this.statusCode = 400;
    
        this.message = message;
	}
 } 