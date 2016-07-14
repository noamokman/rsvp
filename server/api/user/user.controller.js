import User from './user.model';
import empty from 'http-reject-empty';

export function index ({params: {code}}) {
  return User.findOne({code})
    .then(empty);
}