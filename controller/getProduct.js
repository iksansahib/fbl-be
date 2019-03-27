const product = require('../service/product');

module.exports.all = async () => {
    try{
        const rs = await product.get();
        return rs;
    } catch(e){
        console.log(e);
        return {
            success: false,
            message: e
        }
    }
}

module.exports.byID = async (id) => {
    try{
        const rs = await product.getByID(id);
        return rs;
    } catch(e){
        console.log(e);
        return {
            success: false,
            message: e
        }
    }
}