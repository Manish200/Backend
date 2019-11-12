const dbModel = require('../utilities/connection');
const validate = require('../utilities/validator');
const flightBookingDb = {}
//Do not modify or remove this method
flightBookingDb.generateId = () => {
    return dbModel.getFlightCollection().then((model) => {
        return model.aggregate([{$project : {"bookings.bookingId":1,_id:0}},
        {$unwind:"$bookings"},
        {sort : {"bookings.bookingId":-1}},{$limit:1}]).then((id) => {
            let bId = id[0].bookings.bookingId;
            return bId + 1;
        })
    })
}

flightBookingDb.checkCustomer = (customerId) => {
    //fetch the customer object for the given customer Id
    return dbModel.getCustomerCollection().then(customerDetails => {

        return customerDetails.find({ customerId: customerId }, {}).then(customerobj => {

            if (customerobj)
                return customerobj;
            else
                return null;
        })
    })

}

module.exports = flightBookingDb;