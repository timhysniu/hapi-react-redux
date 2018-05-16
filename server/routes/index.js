"use strict"

const Joi = require('joi');

const Routes = (server) => {
    server.route({
        method: 'GET',
        path: '/posts',
        handler: function(request,h) {
            let output = [{
                id: 1,
                title: 'eveniet architecto',
                body: 'quia et suscipit suscipit recusandae'
            },
            {
                id: 2,
                title: 'sunt rem eveniet',
                body: 'totam nostrum rerum est autem sunt rem eveniet architecto'
            }];

            return JSON.stringify(output);
        }
    });
}

module.exports = Routes;
