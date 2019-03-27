const product = require('../../model/product');

module.exports = async (id) => {
    const product_list = await product.query()
        .eager('[productImage,productPrice]')
        .findById(id);
    if(product_list){
        return product_list;
    } else {
        return {success: false};
    }
}