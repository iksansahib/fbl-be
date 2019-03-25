const express = require('express')
const app = express()
const port = 3000
const product = require('./service/product');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/submission', async (req, res) => res.send(await product.insert(req.body)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))