import {AsyncRouter} from 'express-async-router';
import {index} from './user.controller';

const router = new AsyncRouter();

router.get('/:code', index);

export default router;
