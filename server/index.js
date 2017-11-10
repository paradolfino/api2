const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://mysecretsaucedatabase', { useMongoClient: true }); //secret sauce, protecting data since never!
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected");
});


const Schema = mongoose.Schema;

const apiSchema = new Schema({
    word: String,
    type: String
});

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
   console.log(`Server started on ${PORT}`); 
});

app.get('/',(req,res)=>{
    console.log('get');
    res.send('Gotten');
});

app.post('/api/store', function(req, res) {
    var word = req.body.word;
    var type = req.body.type;
});
