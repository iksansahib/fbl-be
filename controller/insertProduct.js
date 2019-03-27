const scrapper = require('../service/scrapper/get');
const cheerio = require('cheerio');
const product = require('../service/product');
const fs = require('fs');
const datetime = require('date-time');
module.exports = async (post) => {
    const body = await scrapper(post.url);
    const $ = cheerio.load(body.data);
    const product_id = $('input[name="product"]').val();
    const title = $('li.item.product > strong').text();
    const price = $(`#product-price-${product_id}`).data('price-amount');
    const description = $(`#description`).text();
    let images = [];
    const script = $('script[type="text/x-magento-init"]')
        .map((i,x)=>x.children[0])
        .filter((i,x)=> x && x.data.match(/\[data\-gallery\-role\=gallery\-placeholder\]/))
        .get(0);
    
    if(script){
        const images_object = JSON.parse(script.data);
        images_object["[data-gallery-role=gallery-placeholder]"]["mage/gallery/gallery"]["data"].map((v,i)=>{
            images.push({images : v.img});
        });
    }

    const data = {
        title,
        url: post.url,
        description: description,
        productImage: images,
        price: price,
        update_price: datetime(),
        productPrice: {
            price
        }
    }
    try{
        const rs = await product.insert(data);
        return rs;
    } catch(e){
        return {
            success: false,
            message: e
        }
    }
}