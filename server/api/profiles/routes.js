/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const driver = require('../neo4j');
const utils = require('../db/utils');

router.get('/:profileId', (req, res, next) => {
  const session = driver.session();
  const _id = req.params.profileId;
  const getPerson = 'MATCH (n:Person { _id: {_id} }) ' +
                'RETURN properties(n) AS person';

  const getSkillsSummary = 'MATCH (n:Person {_id: {_id}}) ' +
  'OPTIONAL MATCH (n)<-[senior:SKILLED {level: "Senior"}]-(:Skill) ' +
  'OPTIONAL MATCH (n)<-[intermediate:SKILLED {level: "Intermediate"}]-(:Skill) ' +
  'OPTIONAL MATCH (n)<-[junior:SKILLED {level: "Junior"}]-(:Skill) ' +
  'OPTIONAL MATCH (n)<-[:TRAINED_IN]-(q:Qualification)' +
  'RETURN count(DISTINCT senior) as seniorSkills, ' +
  'count(DISTINCT junior) as juniorSkills, ' +
  'count(DISTINCT intermediate ) as intermediateSkills, ' +
  'count(DISTINCT q) as qualifications';

  const getSkills = 'MATCH (n:Person {_id: {_id}}) ' +
  'OPTIONAL MATCH (n)<-[:SKILLED]-(s:Skill)' +
  'RETURN s._id as _id, s.name as name, s.description as description';

  const getQualifications = 'MATCH (n:Person {_id: {_id}}) ' +
  'OPTIONAL MATCH (n)<-[:TRAINED_IN]-(q:Qualification)' +
  'RETURN q._id as _id, q.name as name, q.institute as institute';

  // TODO personalise this query once users are attached to organisations
  const getOrganisations = 'MATCH (o:Organisation)--(n:Person {_id: {_id}}) RETURN o._id as _id, o.name as name';

  Promise.all([
    session.run(getPerson, { _id }),
    session.run(getSkillsSummary, { _id }),
    session.run(getSkills, { _id }),
    session.run(getQualifications, { _id }),
    session.run(getOrganisations, { _id }),
  ]).then((results) => {
    const data = {
      person: utils.toCollection(results[0].records)[0].person,
      skillsSummary: utils.toCollection(results[1].records)[0],
      skills: utils.toCollection(results[2].records),
      qualifications: utils.toCollection(results[3].records),
      organisations: utils.toCollection(results[4].records),
    };
    res.json(data);
    session.close();
  }).catch((error) => {
    next(error);
    console.log(error);
    session.close();
  });
});

module.exports = router;
