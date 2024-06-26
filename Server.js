import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import adminRoutes from './routes/admin.routes.js'

dotenv.config();
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json({ extended: false }))


app.use("/admin", adminRoutes)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    connect(process.env.MONGODB_URL).then(() => {
        console.log('DB Connected');
    })
})