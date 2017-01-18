/* eslint-disable global-require */

const driver = require('../../neo4j');

const session = driver.session();

const query = 'MATCH (n) DETACH DELETE n';

session.run(query).then(() => {
  console.log('neo4j reset');
  require('./organisations');
  require('./profiles');
}, (error) => {
  console.log(error);
});
