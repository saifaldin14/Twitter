// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Tweet, Like, Fleet } = initSchema(schema);

export {
  User,
  Tweet,
  Like,
  Fleet
};