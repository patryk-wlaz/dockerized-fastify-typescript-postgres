import * as _ from 'lodash';
import { errors } from './model';

export default (error, request, reply) => {
  const errorObject = _.get(errors, error.message, errors.default);
  return reply
    .code(errorObject.code)
    .send(errorObject);
};
