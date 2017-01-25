const driver = require('../neo4j');
const utils = require('../db/utils');

function getAutocomplete(req, res, next) {
  const session = driver.session();
  const { query: q, label, organisationId } = req.query;
  console.log('----------------');
  console.log(req.query);
  console.log(organisationId);

  let query = '';
  if (label === 'Organisation') {
    query = 'MATCH (n) ' +
            'WHERE {label} IN labels(n) AND lower(n.name) STARTS WITH lower({q}) ' +
            'MATCH (:Organisation { _id: n._id } )<-[r:TEAM_OF]-(:Person { _id: {userId} } ) ' +
            'RETURN n.name AS name, n._id AS _id, n.emails AS emails, r.jobTitle AS jobTitle LIMIT 6 ';
  } else if (label === 'Person') {
    query = 'MATCH (n) ' +
            'WHERE {label} IN labels(n) AND lower(n.name) STARTS WITH lower({q}) ' +
            'MATCH (:Organisation { _id: {organisationId}  } )<-[r:TEAM_OF]-(:Person { _id: n._id } ) ' +
            'RETURN n.name AS name, n._id AS _id, n.email as email, r.jobTitle AS jobTitle LIMIT 6 ';
  } else {
    query = 'MATCH (n) ' +
            'WHERE {label} IN labels(n) AND lower(n.name) STARTS WITH lower({q}) ' +
            'RETURN n.name AS name, n._id AS _id LIMIT 6 ';
  }

  const params = { q, label };
  if (req.user) { params.userId = req.user._id; }
  if (organisationId) { params.organisationId = organisationId; }

  session.run(query, params).then((result) => {
    const data = utils.toCollection(result.records);
    res.json(data);
    session.close();
  }).catch((error) => { console.log(error); next(error); });
}

module.exports = {
  getAutocomplete,
};
