const comment = require('../../model/productComment');

module.exports = async (param) => {
    const comment_list = await comment.query();
    if(comment_list){
        return comment_list;
    } else {
        return {success: false};
    }
}