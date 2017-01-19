const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const multer = require('multer');
const bodyParser = require('body-parser')

const app = express();
const storage = multer.memoryStorage();
const upload = multer({storage});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('ul'), (req, res) => {
  console.log(req.file)
  res.send(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
