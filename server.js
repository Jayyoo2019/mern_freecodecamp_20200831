const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://xungom:890605xungom!@cluster0.9iayi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}
    );
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("****************MongoDB database connection established sucessfully");
})

const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 5000, function(){
    console.log(`Server is running on port : 5000`);
});
