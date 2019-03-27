const product_price = require('../../model/productPrice');

module.exports = async (post) => {
    
    const product_list = await product_price.query().insert(post);
    if(product_list){
        return {success: true};
    } else {
        return {success: false};
    }
}