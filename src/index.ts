import * as fastifyFactory from 'fastify';
import * as fastifyRateLimit from 'fastify-rate-limit';
import * as helmet from 'fastify-helmet';

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

// router

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
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
