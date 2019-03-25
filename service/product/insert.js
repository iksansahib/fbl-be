const product = require('../../model/product');

module.exports = async (post) => {
    
    const product_list = await product.query().insert(post);
    if(product_list){
        return {success: true};
    } else {
        return {success: false};
    }
}