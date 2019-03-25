const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);

class Product extends Model{
    static get tableName(){
        return 'products';
    }
}

module.exports = Product;