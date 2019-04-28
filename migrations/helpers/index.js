const timeManipulationSchema = {
  createdAt: {
    type: 'timestamp',
    notNull: true,
  },
  updatedAt: {
    type: 'timestamp',
    notNull: true,
  },
};

const manipulationSchema = entityName => ({
  ...timeManipulationSchema,
  createdBy: {
    type: 'int',
    foreignKey: {
      name: `${entityName}_creator_id_fk`,
      table: 'users',
      mapping: 'id',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
    }
  },
  updatedBy: {
    type: 'int',
    foreignKey: {
      name: `${entityName}_updater_id_fk`,
      table: 'users',
      mapping: 'id',
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
