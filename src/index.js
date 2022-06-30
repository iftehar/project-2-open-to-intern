const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());



const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://iftekhar:Iftekhar123@cluster0.omtag.mongodb.net/group-44-Database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running'))
    .catch(err => console.log(err))

    app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
