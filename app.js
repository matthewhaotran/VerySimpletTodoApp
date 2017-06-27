const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./client'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});