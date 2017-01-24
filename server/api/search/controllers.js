const driver = require('../neo4j');
const utils = require('../db/utils');

function getAutocomplete(req, res, next) {
  const session = driver.session();
  const { query: q, label } = req.query;
  console.log(q);
  const query = 'MATCH (n) ' +
                'WHERE {label} IN labels(n) AND lower(n.name) STARTS WITH lower({q}) ' +
                'RETURN n.name AS name, n._id AS _id LIMIT 6 ';
  session.run(query, { q, label }).then((result) => {
    const data = utils.toCollection(result.records);
    res.json(data);
    session.close();
  }).catch((error) => { console.log(error); next(error); });
}

module.exports = {
  getAutocomplete,
};
