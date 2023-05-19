import express from 'express';
import routes from './routes/routes';
import userRoutes from './routes/user';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config();
import config from './config';

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', protect , routes);

app.use(userRoutes);

app.use((err, req, res, next) => {
    if(err.type === 'auth'){
        console.log(err);
        res.status(401).json({ message: 'You are not authorized' });
    } else if(err.type === 'input'){
        console.log(err)
        res.status(400).json({ message: 'Invalid input' });
    } else {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

app.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
