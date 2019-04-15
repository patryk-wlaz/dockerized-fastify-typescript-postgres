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

const manipulationSchema = {
  ...timeManipulationSchema,
  createdBy: {
    type: 'int',
  },
  updatedBy: {
    type: 'int',
  },
};

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
