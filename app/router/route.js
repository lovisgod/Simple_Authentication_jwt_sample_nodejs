import express from 'express';
import * as controller from '../controller/controller';
import verify from '../verify/verify';

const router = express.Router();

router.post('/user', controller.postUser);
router.get('/users', verify, controller.getUser);
router.put('/userlog', controller.login);

export default router;