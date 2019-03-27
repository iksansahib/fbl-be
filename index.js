const express = require('express')
const app = express()
const port = 3000
const product = require('./service/product');
const bodyParser = require('body-parser');
const cors = require('cors');
const insertProduct = require('./controller/insertProduct');
const insertComment = require('./controller/insertComment');
const updateComment = require('./controller/updateComment');
const getComment = require('./controller/getComment');
const getProduct = require('./controller/getProduct')
const updatePrice = require('./controller/updatePrice')
app.use(cors());
app.use(bodyParser.json());

app.post('/product', async (req, res) => res.send(await insertProduct(req.body)))
app.get('/product', async (req, res) => res.send(await getProduct.all()))
app.get('/product/:id', async (req, res) => res.send(await getProduct.byID(req.params.id)))
app.post('/comment', async (req, res) => res.send(await insertComment(req.body)))
app.get('/comment/:id', async (req, res) => res.send(await getComment.byProductID(req.params.id)))
app.put('/comment', async (req, res) => res.send(await updateComment(req.body)))

app.listen(port, () => {
    setInterval(updatePrice, 10000)
    console.log(`Example app listening on port ${port}!`);

})