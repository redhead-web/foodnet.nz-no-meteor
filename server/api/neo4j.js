const neo4j = require('neo4j-driver').v1;

const auth = neo4j.auth.basic('neo4j', 'foodnet'); // set password for development to foodnet

// Create a driver instance, for the user neo4j with password neo4j.
const driver = neo4j.driver('bolt://localhost', auth);

// Create a session to run Cypher statements in.
// Note: Always make sure to close sessions when you are done using them!
// const session = driver.session();

module.exports = driver;
