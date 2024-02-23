import express from 'express';
import { auth_router } from './auth/auth_router.js';
import { root_get } from './root_get.js';
import { log_middleware } from './log_middleware.js';
import { post_signup } from './post_signup.js';
import { post_login } from './post_login.js';
export const root_router = express.Router();
root_router.use(log_middleware);
root_router.use('/auth', auth_router);
root_router.get('/', root_get);
root_router.post('/signup', post_signup);
root_router.post('/login', post_login);
//# sourceMappingURL=root_router.js.map