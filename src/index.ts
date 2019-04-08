import * as fastifyFactory from 'fastify';
import * as fastifyRateLimit from 'fastify-rate-limit';
import * as helmet from 'fastify-helmet';
import errorHandler from './common/error-handler';

// error handler
// swagger
// if (!includes(['prod', 'production'], process.env.NODE_ENV)) {
//   setupSwagger(app);
// }

const fastify = fastifyFactory({
  logger: true,
});

// ogólne pluginy (config!)
fastify.register(fastifyRateLimit, {
  max: 100,
  timeWindow: 1000,
});
fastify.register(helmet);

fastify.setErrorHandler(errorHandler);

// router

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});
fastify.get('/error', async (request, reply) => {
  throw new Error('gówno');
});

const start = async () => {
  try {
    await fastify.listen(8000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
