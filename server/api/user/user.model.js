import mongoose from 'mongoose';
import {createSeedModel} from 'mongoose-plugin-seed';
import seed from './user.seed';
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  phone: {
    type: String,
    required: true
  },
  code: String,
  status: String
});

export default createSeedModel('User', UserSchema, seed);