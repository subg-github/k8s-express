const express = require('express'),
app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',
(req, res) => res.send('Valid places: /list'))

app.get('/list',
(req, res) => res.send('Coming soon'))

app.listen(5000,
() => console.log(`[bootup]: Server is running at port: 5000`));
