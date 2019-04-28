'use strict';
const helpers = require('./helpers');
const tableName = 'deals';


exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id,
        reward: {
          type: 'real',
          notNull: true,
          defaultValue: 0,
        },
        order_description: {
          type: 'string',
        },
        offer_description: {
          type: 'string',
        },
        ordererId: {
          type: 'int',
          foreignKey: {
            name: 'deal_orderer_id_fk',
            table: 'users',
            mapping: {
              ordererId: 'id',
            },
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
          }
        },
        takerId: {
          type: 'int',
          foreignKey: {
            name: 'deal_taker_id_fk',
            table: 'users',
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
