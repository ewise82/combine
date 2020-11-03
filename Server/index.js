const Word = require('../Database/word.js');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/../Public`));

app.get('/api/words/:word', (req, res) => {
const word = req.params.word;
console.log(req);
Word.findOne({"WORD":word})
  .then((data) => {
      console.log('data ', data);
      console.log(data['WORD']);
      if (data !== null) {
          res.send(data);
      } 
  })
    .catch((err) => {
        res.sendStatus(404);
        console.log('server error ', err);
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});