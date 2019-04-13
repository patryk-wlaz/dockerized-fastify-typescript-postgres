import * as fastifyFactory from 'fastify';
import * as fastifyRateLimit from 'fastify-rate-limit';
import * as helmet from 'fastify-helmet';
import * as _ from 'lodash';
import errorHandler from './common/error-handler';
import { setupSwagger } from './common/swagger';

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

// if (_.includes(['dev', 'development'], process.env.NODE_ENV)) {
if (true) {
  setupSwagger(fastify);
}

const start = async () => {
  try {
    await fastify.listen(8000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
