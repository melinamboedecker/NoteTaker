//LOAD DATA
const fs = require("fs");
const database = JSON.parse(fs.readFileSync("./db/db.json/"));
const path = require('path');
const uniqid = require('uniqid');

module.exports = (app) => {
    // => API GET requests
    app.get('/api/notes', (req, res) => {
        res.json(database);
    })

    //API POST requests
    app.post('/api/notes', (req, res) => {
        const note = req.body;
        note.id = uniqid();
        database.push(note);
        console.log(database);
        fs.writeFileSync('./db/db.json', JSON.stringify(database));
        res.json ("your note has been saved")
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log('dELETE');
        console.log(req.params.id);
        const deleId = req.params.id;
        const dataToDele = JSON.parse(fs.readFileSync("./db/db.json/"));
        console.log(dataToDele);
        let filtered = dataToDele.filter(function (el) {
            return el.id != deleId;
        });
        console.log(filtered);
        fs.writeFileSync('./db/db.json', JSON.stringify(filtered));
        res.json ("your note has been deleted")
    })

}