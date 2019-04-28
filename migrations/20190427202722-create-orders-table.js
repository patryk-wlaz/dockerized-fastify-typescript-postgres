'use strict';
const helpers = require('./helpers');
const tableName = 'orders';

exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id,
        take_offers_until: {
          type: 'timestamp',
        },
        will_be_resolved_until: {
          type: 'timestamp',
        },
        // localization: { typ geography is avalaible in postgis but not in d-migrate lib
        //   type: 'geography',
        // },
        reward: {
          type: 'int',
        },
        description: {
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
