const product = require('../../model/product');
const datetime = require('date-time');

module.exports = async (param) => {
    const product_list = await product.query().whereRaw('DATE_ADD(update_price, INTERVAL 1 HOUR)<=?', datetime());
    if(product_list){
        return product_list;
    } else {
        return {success: false};
    }
}