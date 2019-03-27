const product = require('../service/product');
const insert_price = require('../service/price/insert');
const scrapper = require('../service/scrapper/get');
const cheerio = require('cheerio');
const datetime = require('date-time');

module.exports = async() => {
    const resp = await product.getMoreThanOneHour();
    resp.map(async(v,i)=>{
        let body = await scrapper(v.url);
        let $ = cheerio.load(body.data);
        let product_id = $('input[name="product"]').val();
        let price = $(`#product-price-${product_id}`).data('price-amount');
        let data = {
            price: price,
            product_id: v.id,
        }
        insert_price(data);
        data = {
            update_price: datetime(),
            id: v.id
        }
        product.update(data);
    })
}