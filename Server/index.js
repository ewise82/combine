const Word = require('../Database/word.js');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/../Public`));

app.get('/api/words/:word', (req, res) => {
const word = req.params.word;

Word.findOne({"WORD":word})
  .then((data) => {
      if (data !== null) {
          res.send(data);
      } else {
          res.sendStatus(404);
      }
  })
    .catch((err) => {
        res.sendStatus(500);
        console.log('server error ', err);
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});