const product = require('../../model/product');

module.exports = async (param) => {
    const product_list = await product.query();
    if(product_list){
        return product_list;
    } else {
        return {success: false};
    }
}