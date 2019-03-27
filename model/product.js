const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);

class Product extends Model{
    static get tableName() {
        return 'products';
    } 

    static get relationMappings() {
        const productImage = require('../model/productImage');
        const productPrice = require('../model/productPrice');
        const productComment = require('../model/productComment');
        return {
            productImage: {
                relation: Model.HasManyRelation,
                modelClass: productImage,
                join: {
                    from: 'products.id',
                    to: 'product_images.product_id'
                }
            },
            productPrice: {
                relation: Model.HasManyRelation,
                modelClass: productPrice,
                join: {
                    from: 'products.id',
                    to: 'product_prices.product_id'
                }
            },
            productComment: {
                relation: Model.HasManyRelation,
                modelClass: productComment,
                join: {
                    from: 'products.id',
                    to: 'product_comments.product_id'
                }
            }
        }
    }
}

module.exports = Product;