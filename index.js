import express from 'express';
import { bootstrap } from './src/bootstrap.js';

const app = express();
app.use(express.json());

bootstrap(app);

app.listen(3000, () => console.log('Server running on 3000'));