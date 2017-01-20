/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const driver = require('../neo4j');
const utils = require('../db/utils');
const faker = require('faker');

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
  'MATCH (n)<-[:SKILLED]-(s:Skill)' +
  'RETURN s._id as _id, s.name as name, s.description as description';

  const getQualifications = 'MATCH (n:Person {_id: {_id}}) ' +
  'MATCH (n)<-[:TRAINED_IN]-(q:Qualification)' +
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

router.post('/update', (req, res, next) => {
  const data = req.body;
  const session = driver.session();
  let query = '';
  if (data.type === 'property') {
    query = 'MATCH (person:Person { _id: {data}._id } ) ' +
            'SET person += {data}.update ';
  } else if (data.type === 'relationship') {
    if (data.operation === 'insert') {
      if (data.listName === 'organisations') {
        if (!data.update._id) { data.update._id = faker.random.uuid(); }
        query = 'MATCH (person:Person { _id: {data}._id } ) ' +
                'MERGE (organisation:Organisation { _id: {data}.update._id } ) ' +
                'ON CREATE SET organisation = {data}.update ' +
                'MERGE ((organisation)<-[:TEAM_OF {jobTitle: {data}.update.jobTitle}]-(person)) ';
      } else if (data.listName === 'skills') {
        query = 'MATCH (person:Person { _id: {data}._id } ) ' +
                'MERGE (skill:Skill { name: lower({data}.update.name) } ) ' +
                'ON CREATE SET skill.name = lower({data}.update.name), skill.description = {data}.update.description ' +
                'MERGE ((person)<-[:SKILLED { level: {data}.update.level }]-(skill)) ';
      } else if (data.listName === 'qualifications') {
        query = 'MATCH (person:Person { _id: {data}._id } ) ' +
                'MERGE (qualification:Qualification { name: lower({data}.update.name) } ) ' +
                'ON CREATE SET qualification.name = lower({data}.update.name), qualification.institute = {data}.update.institute ' +
                'MERGE ((person)<-[:TRAINED_IN]-(qualification)) ';
      }
    } else if (data.operation === 'remove') {
      if (data.listName === 'organisations') {
        query = 'MATCH (:Organisation { _id: {data}.update._id } )<-[r:TEAM_OF]-(:Person { _id: {data}._id } ) ' +
                'DELETE r';
      } else if (data.listName === 'skills') {
        query = 'MATCH (:Person { _id: {data}._id } )<-[r:SKILLED]-(:Skill { name: lower({data}.update.name) } ) ' +
                'DELETE r';
      } else if (data.listName === 'qualifications') {
        query = 'MATCH (:Person { _id: {data}._id } )<-[r:TRAINED_IN]-(:Qualification { name: lower({data}.update.name) } ) ' +
                'DELETE r';
      }
    } else if (data.operation === 'update') {
      //
    }
  }

  session.run(query, { data }).then(() => {
    session.close();
    res.json({});
  }, (error) => {
    console.log(error);
    next(error);
  });
});

module.exports = router;
