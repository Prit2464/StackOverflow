import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"
import questionroutes from "./routes/question.js"
import answerroutes from "./routes/answer.js"

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000
const mongoURL = process.env.MONGO_DB_URL


mongoose.connect(mongoURL)
    .then(() => console.log("mongo db connected successfully"))
    .catch((err) => console.log(err.message))

app.use('/user', userRoutes)
app.use('/questions', questionroutes)
app.use('/answer', answerroutes)
app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log("app is running on port ", PORT)
})


