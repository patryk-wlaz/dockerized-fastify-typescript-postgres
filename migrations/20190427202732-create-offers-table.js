'use strict';
const helpers = require('./helpers');
const tableName = 'offers';

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
        // localization: { type geography is avalaible in postgis but not in d-migrate lib
        //   type: 'geography',
        // },
        proposal: {
          type: 'int',
        },
        description: {
          type: 'string',
        },
        orderId: {
          type: 'int',
          foreignKey: {
            name: 'offers_order_id_fk',
            table: 'orders',
            mapping: 'id',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
          }
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
