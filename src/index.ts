import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/user';
import { errorHandler } from './middlewares/errorMiddleware';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/user', userRouter);

// Test endpoint
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running!'
    });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});