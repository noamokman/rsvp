import {AsyncRouter} from 'express-async-router';
import {index, update} from './user.controller';

const router = new AsyncRouter();

router.get('/:code', index);
router.put('/:code', update);

export default router;
