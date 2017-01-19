/* eslint-disable new-cap, prefer-arrow-callback, no-plusplus, no-underscore-dangle */
const express = require('express');
const router = express.Router();
// const organisationsFixture = require('../db/organisations');

const driver = require('../neo4j');
const utils = require('../db/utils');
const faker = require('faker');

router.get('/newest', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';
  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });
});

router.get('/popular', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';
  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });
  // res.json({ organisations: [
  //   { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
  //   { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/auth', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';
  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });
  // res.json({ organisations: [
  //   { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
  //   { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/bookmarks', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';
  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });
  // res.json({ organisations: [
  //   { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
  //   { _id: 'someOtherId', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/one/:organisationId', (req, res, next) => {
  const _id = req.params.organisationId;
  const session = driver.session();
  const getOrganisation = 'MATCH (n:Organisation { _id: {_id} }) ' +
  'RETURN properties(n) AS organisation';

  const getLocations = 'MATCH (l:Location)<-[:OCCUPIES]-(:Organisation { _id: {_id} }) ' +
  'RETURN l.address AS address';

  const getInputs = 'MATCH (i:Resource)-[:INPUTS]->(:Organisation { _id: {_id} }) ' +
  'RETURN i.name AS name, i._id AS _id';

  const getOutputs = 'MATCH (o:Resource)<-[:OUTPUTS]-(:Organisation { _id: {_id} }) ' +
  'RETURN o.name AS name, o._id AS _id';

  const getTeam = 'MATCH (p:Person)-[t:TEAM_OF]->(:Organisation { _id: {_id} }) ' +
  'RETURN p._id as _id, p.name as name, t.jobTitle as jobTitle';
  Promise.all([
    session.run(getOrganisation, { _id }),
    session.run(getLocations, { _id }),
    session.run(getInputs, { _id }),
    session.run(getOutputs, { _id }),
    session.run(getTeam, { _id }),
  ])
  .then((result) => {
    const data = {
      organisation: utils.toCollection(result[0].records)[0].organisation,
      locations: utils.toCollection(result[1].records),
      inputs: utils.toCollection(result[2].records),
      outputs: utils.toCollection(result[3].records),
      team: utils.toCollection(result[4].records),
    };
    res.json(data);
    session.close();
  })
  .catch((error) => {
    console.log(error);
    next(error);
  });
  // res.json(organisationsFixture[0]);
});

router.post('/create', (req, res) => {
  const data = req.body;
  data._id = faker.random.uuid();

  const session = driver.session();
  const query = 'MERGE (organisation:Organisation {_id: {data}._id}) ' +
                'ON CREATE SET organisation = {data} ';

  session.run(query, { data }).then(() => {
    res.json(data);
    session.close();
  }, (error) => {
    data.error = error;
    res.json(data);
  });
});

router.post('/update', (req, res, next) => {
  const data = req.body;

  const session = driver.session();
  let query = '';
  console.log(data);
  if (data.type === 'property') {
    console.log('-----------------update-----------------------');
    query = 'MATCH (organisation:Organisation { _id: {data}._id } ) ' +
            'SET organisation += {data}.update ' +
            'RETURN organisation';
    console.log(query);
    // MATCH (organisation:Organisation { _id: "c8a8f113-5d8d-45b7-b526-2f05e2a8a80b"} )
    // SET organisation.name =  "spoon"
  } else if (data.type === 'relationship') {
    if (data.operation === 'insert') {
      query = '';
    } else if (data.operation === 'remove') {
      query = '';
    } else if (data.operation === 'update') {
      query = '';
    }
  }

  session.run(query, { data }).then((result) => {
    console.log('-----------------update end-----------------------');
    console.log(result.records);
    session.close();
    res.json({});
  }, (error) => {
    console.log('-----------------update error-----------------------');
    console.log(error);
    next(error);
  });
});


module.exports = router;
