import User from './user.model';

export function index () {
  return User.find({});
}