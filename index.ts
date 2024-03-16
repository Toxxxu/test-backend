import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes/user.route';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || '');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
