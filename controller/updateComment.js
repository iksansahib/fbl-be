const product_comment = require('../service/comment');

module.exports = async (post) => {
    try{
        const rs = await product_comment.update(post);
        return rs;
    } catch(e){
        return {
            success: false,
            message: e
        }
    }
}