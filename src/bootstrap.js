import userRouter from './modules/user/user.controller.js';
import postRouter from './modules/post/post.controller.js';
import commentRouter from './modules/comment/comment.controller.js';
import { checkConnection } from './db/db.connection.js';

export const bootstrap = async (app) => {
    await checkConnection();
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/comments', commentRouter);
};