const generateId = () => parseInt(crypto.randomBytes(3).toString('hex'), 16);

const getCurrentTimestamp = () => Date.now();

const manipulationSchema = {
  createdAt: {
    type: 'timestamp',
    notNull: true,
  },
  updatedAt: {
    type: 'timestamp',
    notNull: true,
  },
  createdBy: {
    type: 'int',
  },
  updatedBy: {
    type: 'int',
  },
};

module.exports = {
  generateId,
  getCurrentTimestamp,
  manipulationSchema,
};
