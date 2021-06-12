const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.use("/", "./routes/htmlroutes.js")
app.use("/api", './routes/apiroutes.js')
// require()(app);
// require('')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});