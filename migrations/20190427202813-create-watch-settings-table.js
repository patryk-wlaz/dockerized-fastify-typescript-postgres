'use strict';
const helpers = require('./helpers');
const tableName = 'offers';

exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id, // id the same as in user, because it is one_to_one relation
        // center: { type geography is avalaible in postgis but not in d_migrate lib
        //   type: 'geography',
        // },
        radius: {
          type: 'int',
        },
        ...helpers.timeManipulationSchema,
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
