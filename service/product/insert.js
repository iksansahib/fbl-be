const product = require('../../model/product');

module.exports = async (post) => {
    
    const product_list = await product.query().upsertGraphAndFetch(post);
    if(product_list){
        return {success: true, product_list};
    } else {
        return {success: false};
    }
}