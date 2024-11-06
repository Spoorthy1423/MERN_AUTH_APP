import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.post('/', (req, res) => {
   res.send("Hello World!");
});

app.use(express.json()); //allows us to parse json data in the body of the request
app.use(cookieParser()); //allows us to parse cookies in the request headers
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });

};

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port : ", PORT);
});
