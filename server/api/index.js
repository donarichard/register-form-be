import {Router} from 'express';
import auth from './routers/auth';

const router = Router();

auth(router)
export default router;