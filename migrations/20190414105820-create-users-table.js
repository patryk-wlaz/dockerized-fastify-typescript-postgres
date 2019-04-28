'use strict';
const helpers = require('./helpers');
const tableName = 'users';

exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id,
        name: {
          type: 'string',
          length: 50,
        },
        email: {
          type: 'string',
          unique: true,
          notNull: true,
          length: 100,
        },
        passwordHash: {
          type: 'string',
          length: 120,
          notNull: true,
        },
        privilegesChangedAt: {
          type: 'timestamp',
          notNull: true,
          defaultValue: 'Thu Jan 1 00:00:00 1970',
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
