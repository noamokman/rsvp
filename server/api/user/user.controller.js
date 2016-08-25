import User from './user.model';
import empty from 'http-reject-empty';

export function index ({params: {code}}) {
  return User.findOne({code})
    .then(empty);
}

export function update ({params: {code}, body: {num}}) {
  return User.findOne({code})
    .then(empty)
    .then(user => {
      user.num = num;

      return user.save();
    });
}