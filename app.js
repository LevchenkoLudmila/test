const express = require('express');
const upload = require('multer')();
const validMw = require('./routes/valid');

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/', (req, res) => {
   res.render('index');
});

server.post('/formUser', upload.none(), validMw({
   type: 'object',
   properties: {
      name: { type: 'string'},
      login: { type: 'string'},
      surname: { type: 'string'},
      dataBirthday: { type: 'string'},
   },
   required: ['name', 'login', 'surname', 'dataBirthday'],
   additionalProperties: false
}), async(req, res) => {
   consile.log('ok');
});

server.listen(3000, () => {
   console.log('server work');
});
