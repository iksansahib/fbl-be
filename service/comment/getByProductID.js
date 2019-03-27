const comment = require('../../model/productComment');

module.exports = async (id) => {
    const comment_list = await comment.query()
        .where({'product_id': id})
        .orderBy('id', 'DESC');
    if(comment_list){
        return comment_list;
    } else {
        return {success: false};
    }
}