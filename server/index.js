const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
   console.log(`Server started on ${PORT}`); 
});

app.get('/',(req,res)=>{
    console.log('get');
    res.send('Gotten');
});