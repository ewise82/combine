const db = require('../Database/index.js');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/../Public`));

app.get('/api/words/:word', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});