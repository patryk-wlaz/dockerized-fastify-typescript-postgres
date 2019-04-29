const timeManipulationSchema = {
  created_at: {
    type: 'timestamp',
    notNull: true,
  },
  updated_at: {
    type: 'timestamp',
    notNull: true,
  },
};

const manipulationSchema = entityName => ({
  ...timeManipulationSchema,
  created_by: {
    type: 'int',
    foreignKey: {
      name: `${entityName}_creator_id_fk`,
      table: 'users',
      mapping: { 
        created_by: 'id',
      },
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
    }
  },
  updated_by: {
    type: 'int',
    foreignKey: {
      name: `${entityName}_updater_id_fk`,
      table: 'users',
      mapping: { 
        updated_by: 'id',
      },
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
    }
  },
});

const id =  {
  id: {
    type: 'int',
    primaryKey: true,
    unique: true,
    notNull: true,
  },
};

module.exports = {
  timeManipulationSchema,
  manipulationSchema,
  id,
};
