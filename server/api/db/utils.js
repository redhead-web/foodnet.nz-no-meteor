/* eslint-disable no-plusplus, no-underscore-dangle */

function toCollection(records) {
  const result = [];
  for (let i = 0; i < records.length; i++) {
    result.push(toObject(records[i]));
  }

  return result;
}

function toObject(record) {
  const object = {};
  for (let i = 0; i < record.keys.length; i++) {
    object[record.keys[i]] = record._fields[i];
  }
  return object;
}

module.exports = { toCollection };
