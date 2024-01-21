import express from "express";
import cors from "cors";
import CategoryRoute from "./routes/CategoryRoute.js";
import db from "./config/Database.js";
import BookRoute from "./routes/BookRoute.js"

const app = express();

app.use(cors());
app.use(express.json())
app.use(CategoryRoute);
app.use(BookRoute);

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('test')
})

app.listen(5000, () => console.log('Server up and running...'));