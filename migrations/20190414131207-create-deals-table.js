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
        orderer_id: {
          type: 'int',
          foreignKey: {
            name: 'deal_orderer_id_fk',
            table: 'users',
            mapping: {
              orderer_id: 'id',
            },
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
          }
        },
        taker_id: {
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
