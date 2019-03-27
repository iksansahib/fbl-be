const product = require('../../model/product');

module.exports = async (post) => {
    
    const product_list = await product.query().update(post).where('id',post.id);
    if(product_list){
        return {success: true};
    } else {
        return {success: false};
    }
}