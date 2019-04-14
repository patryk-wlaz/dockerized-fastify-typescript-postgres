export const setupRoutes = fastify => {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
  fastify.get('/error', async (request, reply) => {
    throw new Error('gówno');
  });
};
