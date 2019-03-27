const comment = require('../../model/productComment');

module.exports = async (post) => {
    
    const comment_list = await comment.query().insert(post);
    if(comment_list){
        return {success: true};
    } else {
        return {success: false};
    }
}