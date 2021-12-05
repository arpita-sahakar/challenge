'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try {
        //Getting the itemToLookup from request path parameter instead of hardcoding
        //Not used body to get the item as usually GET is invoked without a body
        const itemToLookup = request.params.item;
        // console.log("itemToLookup " + itemToLookup);
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        return response.status(200).send(JSON.stringify(data));
    } catch (error) {
        return response.status(500).send(error);
    }
};

module.exports = (app) => {
    app.get('/users/age/:item', getListOfAgesOfUsersWithHandler);
};
