import * as fastifyFactory from 'fastify';
import * as fastifyRateLimit from 'fastify-rate-limit';
import * as helmet from 'fastify-helmet';
import * as _ from 'lodash';
import errorHandler from './common/error-handler';
import { setupSwagger } from './common/swagger';
import { fastifyRateLimitOpts } from './common/config';
import { setupRoutes } from './setup-routes';

const fastify = fastifyFactory({
  logger: true,
});

fastify.register(fastifyRateLimit, fastifyRateLimitOpts);
fastify.register(helmet);

fastify.setErrorHandler(errorHandler);

setupRoutes(fastify);

if (_.includes(['dev', 'development'], process.env.NODE_ENV)) {
  setupSwagger(fastify);
}

const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
