import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import adminRouter from './routes/AdminRouter.js';
import blogRouter from './routes/blogRouter.js';

const app = express();

await connectDB();

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/',(req,res)=>res.send('API is working'))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})

export default app;