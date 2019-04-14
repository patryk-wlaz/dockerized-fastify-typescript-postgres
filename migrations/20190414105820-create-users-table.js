'use strict';
const helpers = require('./helpers');

exports.up = function(db) {

  return db.createTable(
    'users',
    {
      columns: {
        id: {
          type: 'int',
          primaryKey: true,
          unique: true,
          notNull: true,
        },
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
          defaultValue: 'Thu Jan 1 00:00:00 1970',
        },
        ...helpers.manipulationSchema,
      },
      ifNotExists: true,
    },
  );
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
