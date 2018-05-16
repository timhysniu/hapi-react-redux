'use strict';

const Hapi = require('hapi');
const Routes = require('./server/routes');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3001
});

Routes(server);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
