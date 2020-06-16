const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/worker-saftey', {useNewUrlParser : true, useUnifiedTopology : true}, () => {
        console.log('successfully connected to databasae');
});

//React app uses port 3000
app.listen(5000, () => {
    console.log('server started');
});