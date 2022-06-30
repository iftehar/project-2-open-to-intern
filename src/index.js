const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());



const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://naveen-developer:rash47rash2021@naveen-developer.eja8d.mongodb.net/group44Database", {useNewUrlParser: true})
    .then(() => console.log('mongodb running'))
    .catch(err => console.log(err))

    app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
