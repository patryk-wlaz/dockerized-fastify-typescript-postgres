import * as crypto from 'crypto';
// import * as bcrypt from 'bcryptjs';
// import { verify, sign } from 'jsonwebtoken';
// import { promisify } from 'bluebird';

// import { jwt, saltRounds } from './config';
// import { UNAUTHORIZED } from 'root/common/errors';

// const jwtVerify: (
//   token: string,
//   secret: string,
//   options: object,
// ) => any = promisify(verify);
// const jwtSign: (
//   payload: object,
//   secret: string,
//   options: object,
// ) => any = promisify(sign);

// export const decodeToken = async (token: string): Promise<any> => {
//   if (!token) {
//     throw new Error(UNAUTHORIZED);
//   }
//   let payload;
//   try {
//     payload = await jwtVerify(token, jwt.secret, jwt.options);
//   } catch (e) {
//     throw new Error(UNAUTHORIZED);
//   }
//   return payload;
// };

// export const generateToken = async (
//   data: object,
//   expiration = jwt.expiration,
//   secret = jwt.secret,
// ): Promise<string> => {
//   const payload = {
//     ...data,
//     exp: Date.now() / 1000 + expiration,
//   };
//   return await jwtSign(payload, secret, jwt.options);
// };

// export const hashPassword = async (password: string): Promise<string> => {
//   const salt = await bcrypt.genSalt(saltRounds);
//   return await bcrypt.hash(password, salt);
// };

// export const hashPasswordSync = (password: string): string => {
//   const salt = bcrypt.genSaltSync(saltRounds);
//   return bcrypt.hashSync(password, salt);
// };

// export const validatePassword = async (
//   password: string,
//   passedData: string,
// ): Promise<boolean> => {
//   try {
//     const authorized = await bcrypt.compare(passedData, password);
//     if (!authorized) {
//       throw new Error();
//     } // no need to throw meaningful stuff, catch below will do this
//   } catch (e) {
//     throw new Error(UNAUTHORIZED);
//   }
//   return true;
// };

export const generateId = () => parseInt(crypto.randomBytes(3).toString('hex'), 16);
