const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);

class ProductComment extends Model{
    static get tableName(){
        return 'product_comments';
    }
}

module.exports = ProductComment;