const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);

class ProductImage extends Model{
    static get tableName(){
        return 'product_images';
    }
}

module.exports = ProductImage;