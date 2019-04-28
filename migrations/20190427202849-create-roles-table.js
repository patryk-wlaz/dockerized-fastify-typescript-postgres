'use strict';
const helpers = require('./helpers');
const tableName = 'roles';

exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id,
        name: {
          type: 'string',
        },
        ...helpers.manipulationSchema(tableName),
      },
      ifNotExists: true,
    },
  );
};

exports.down = function(db) {
  return db.dropTable(tableName);
};

exports._meta = {
  "version": 1
};
