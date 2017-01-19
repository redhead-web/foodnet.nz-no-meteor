const profilesFixtures = require('../profiles');

const driver = require('../../neo4j');

const session = driver.session();

const query = 'UNWIND {json} AS data ' +
              'MERGE (person:Person {_id: data.person._id}) ' +
              'ON CREATE SET person = data.person ' +

              'FOREACH (skillObject in data.skills | ' +
                'MERGE (skill:Skill { _id: skillObject._id }) ' +
                'ON CREATE SET skill.name = skillObject.name, skill.description = skillObject.description ' +
                'MERGE (person)<-[:SKILLED { level: skillObject.level }]-(skill) ' +
              ') ' +

              'FOREACH (qualificationObject in data.qualifications | ' +
                'MERGE (qualification:Qualification { _id: qualificationObject._id }) ' +
                'ON CREATE SET qualification = qualificationObject ' +
                'MERGE (person)<-[:TRAINED_IN]-(qualification) ' +
              ') ' +

              'FOREACH (organisationObject in data.organisations | ' +
                'MERGE (organisation:Organisation { _id: organisationObject._id }) ' +
                'ON CREATE SET organisation = organisationObject ' +
                'MERGE (person)-[:TEAM_OF {jobTitle: organisationObject.jobTitle}]->(organisation) ' +
              ') ';

session.run(query, { json: profilesFixtures }).then(() => {
  console.log('neo4j Success!');
}, (error) => {
  console.log('oops!');
  console.log(error);
});
