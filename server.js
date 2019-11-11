var express = require('express');
var cors = require('cors');
var app = express();
const mongoose = require('mongoose');
require('dotenv').config();

var port = process.env.PORT || 5000    //Zmkienna do startu serwera

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/diary'    //łączenia bazy tutaj jest nazwa

mongoose.connect(mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true  }  //oiekt konfiguracyjny mongoose
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const Users = require('./routes/Users')
const diarypostRouter = require('./routes/diaryPost')  //tutaj jest Router w nazwie bo zrobiłem to tak jak powinno wyglądac tamtego nie chce już zmieniac

app.use('/users', Users)
app.use('/diarypost', diarypostRouter)

app.listen(port, function() {                         //Start servera
  console.log('Server is running on port: ' + port)
})
