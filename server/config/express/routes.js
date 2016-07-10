import createError from 'http-errors';

// inject:route-imports
import userRoute from '../../api/user';

export default app => {
  // inject:route-usage
  app.use('/api/users', userRoute);

  // All undefined api routes should return a 404
  app.route('/:url(api)/*')
    .get((req, res, next) => {
      next(createError(404));
    });
};
