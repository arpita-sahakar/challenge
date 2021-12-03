'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    //Getting the itemToLookup from request path parameter instead of hardcoding
    //Not used body to get the item as usually GET is invoked without a body
    const itemToLookup = request.params.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users/age/:item', getListOfAgesOfUsersWithHandler);
};
