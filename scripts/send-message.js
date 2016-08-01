import 'dotenv/config';
import {RestClient} from 'twilio';

const client = new RestClient();

client.messages.create({
  body: 'message',
  to: '+972548111255',
  from: 'test'
}, (err, message) => {
  console.log(err || message);
});