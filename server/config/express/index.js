import morgan from 'morgan';
import compression from 'compression';
import {urlencoded, json} from 'body-parser';
import methodOverride from 'method-override';
import errorHandler from 'api-error-handler';
import routes from './routes';

export default app => {
  app.use(compression());
  app.use(urlencoded({extended: false}));
  app.use(json());
  app.use(methodOverride());
  app.use(morgan('dev'));

  routes(app);

  app.use(errorHandler());
};
