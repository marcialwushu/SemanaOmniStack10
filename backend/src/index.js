const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-795dg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);