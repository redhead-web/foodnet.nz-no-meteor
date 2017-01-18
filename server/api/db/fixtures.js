const organisationsFixtures = require('./organisations');

const driver = require('../neo4j');

const session = driver.session();

const query = 'UNWIND {json} AS data ' + // loop over json array with each element called 'data'
              // create or find a node labelled "Organisation" with id equal to json data id
              'MERGE (organisation:Organisation {_id: data.organisation._id}) ' +
              // if we are creating a new node, then...
              // undefined properties should resolve to null which is neo4j talk for undefined.
              'ON CREATE SET organisation = data.organisation ' +
              // loop over locations and create or find location nodes, then create relationship between organisation and locations
              'FOREACH (locationData in data.locations | MERGE (location:Location {address: locationData.address }) MERGE (organisation)-[:OCCUPIES]->(location) ) ' +
              // loop over inputs the same way
              'FOREACH (inputObject in data.inputs | ' +
                // create the input if it doesn't already exist
                'MERGE (input:Resource { _id: inputObject._id }) ON CREATE SET input.name = inputObject.name ' +
                // make a relationship between the input and organisation
                'MERGE (input)-[:INPUTS]->(organisation) ' +
                // make a new organisation for the provider unless it already exists
                // later be sure to ignore this step if providerId is null or undefined
                'MERGE (provider:Organisation { _id: inputObject.providerId }) ON CREATE SET provider.name = inputObject.provider ' +
                'MERGE (provider)-[:SUPPLIES { resourceId: inputObject._id }]->(organisation)) ' +
              // loop over outputs
              'FOREACH (outputObject in data.outputs | ' +
                // create the output if it doesn't already exist
                'MERGE (output:Resource { _id: outputObject._id }) ON CREATE SET output.name = outputObject.name ' +
                // make a relationship between the output and organisation
                'MERGE (organisation)-[:OUTPUTS]->(output)) ' +
              // loop over outputs
              'FOREACH (teamObject in data.team | ' +
                // create the output if it doesn't already exist
                'MERGE (person:Person { _id: teamObject._id }) ON CREATE SET person.name = teamObject.name ' +
                // make a relationship between the team member and organisation
                'MERGE (person)-[:TEAM_OF {jobTitle: teamObject.jobTitle}]->(organisation)) '
              ;

session.run(query, { json: organisationsFixtures }).then((result) => {
  console.log('neo4j Success!');
  console.log(result);
}, (error) => {
  console.log('oops!');
  console.log(error);
});
