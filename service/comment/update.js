const comment = require('../../model/productComment');

module.exports = async (post) => {
    console.log(post);
    const comment_list = await comment.query().patch(post).where("id", post.id);
    if(comment_list){
        return {success: true};
    } else {
        return {success: false};
    }
}