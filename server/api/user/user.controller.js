import User from './user.model';

export function index ({query: {code}}) {
  return User.findOne({code});
}