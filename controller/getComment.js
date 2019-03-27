const comment = require('../service/comment');

module.exports.byProductID = async (id) => {
    try{
        const rs = await comment.getByProductID(id);
        return rs;
    } catch(e){
        console.log(e);
        return {
            success: false,
            message: e
        }
    }
}