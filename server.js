const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));



require('./routes/apiroutes.js')(app);
require('./routes/htmlroutes.js')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});