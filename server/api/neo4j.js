const neo4j = require('neo4j-driver').v1;

const auth = neo4j.auth.basic('neo4j', 'neo4j');

// Create a driver instance, for the user neo4j with password neo4j.
const driver = neo4j.driver('bolt://localhost', auth);

// Create a session to run Cypher statements in.
// Note: Always make sure to close sessions when you are done using them!
const session = driver.session();

session
  .run('MATCH (alice {name : {nameParam} }) RETURN alice.age', { nameParam: 'Alice' })
  .then((result) => {
    result.records.forEach((record) => {
      console.log(record);
    });

    // Completed!
    session.close();
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = driver;
