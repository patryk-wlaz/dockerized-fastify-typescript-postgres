'use strict';
const helpers = require('./helpers');
const tableName = 'users_roles';

exports.up = function(db) {

  return db.createTable(
    tableName,
    {
      columns: {
        ...helpers.id,
        user_id: {
          type: 'int',
          foreignKey: {
            name: 'users_roles_user_id_fk',
            table: 'users',
            mapping: 'id',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
          }
        },
        role_id: {
          type: 'int',
          foreignKey: {
            name: 'users_roles_role_id_fk',
            table: 'roles',
            mapping: 'id',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
          }
        },
        ...helpers.manipulationSchema,
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
