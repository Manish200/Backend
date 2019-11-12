const employeeModel = require('../model/users');
const validator = require('../utilities/Validator')
const employeeService = {};

employeeService.fetchDetails = ( empId ) => {
    validator.validateId(empId)
    var details =  employeeModel.fetchDetails( empId )
    if( details ) return details
    else {
        var error = new Error('Details not found');
        error.status = 404;
        throw error;
    }
}

module.exports = employeeService