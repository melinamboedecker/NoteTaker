const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//app.use(express.static(__dirname + '/public'));
console.log("+++++++++++++++++++++++++++++++++++++++")
console.log(__dirname);
console.log("+++++++++++++++++++++++++++++++++")


require(path.join(__dirname, './routes/apiroutes'))(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});