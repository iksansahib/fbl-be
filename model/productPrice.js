const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);

class ProductPrice extends Model{
    static get tableName(){
        return 'product_prices';
    }
}

module.exports = ProductPrice;