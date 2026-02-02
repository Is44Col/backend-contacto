const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.get('/', function(req, res) {
    res.send('hola mundo');
});

app.listen(port, () => {
    console.log(`server is running on http:/localhost:${port}`);
});