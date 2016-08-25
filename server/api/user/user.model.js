import {Schema} from 'mongoose';
import {createSeedModel} from 'mongoose-plugin-seed';
import seed from './user.seed';

const UserSchema = new Schema({
  name: String,
  phone: {
    type: String,
    required: true
  },
  code: String,
  num: Number
});

export default createSeedModel('User', UserSchema, seed);