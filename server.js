var express = require('express');
var cors = require('cors');
var app = express();
const mongoose = require('mongoose');
require('dotenv').config();

var port = process.env.PORT || 5000  

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/diary'  

mongoose.connect(mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true  } 
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const Users = require('./routes/Users')
const diarypostRouter = require('./routes/diaryPost')  

app.use('/users', Users)
app.use('/diarypost', diarypostRouter)

app.listen(port, function() {                        
  console.log('Server is running on port: ' + port)
})
