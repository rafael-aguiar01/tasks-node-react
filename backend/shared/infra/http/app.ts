import express from 'express';
import { router } from './routes';
import cors from 'cors'


const app = express();

const allowedOrigins = [
    'http://localhost:5173',
  ]

app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    allowedHeaders: ['Authorization', 'authorization', 'Content-Type'],
    methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS']
  }))

  
app.use(express.json());
app.use(router)

export default app;