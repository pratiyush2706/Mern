import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongodb connection established successfully');

})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});