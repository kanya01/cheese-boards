const { Sequelize, Model, DataTypes } = require('sequelize')

const path = require('path')
const { dirname } = require('path')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'cheese.sqlite')

})

class User extends Model { }
User.init({ 
    name: { type: DataTypes.STRING },
    email: {type: DataTypes.STRING} 
}, 
{ sequelize: db });

class Board extends Model { }
Board.init({ 
    type: { type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.NUMBER}
}, 
{ sequelize: db})

class Cheese extends Model { }
Cheese.init({ 
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
}, 
{sequelize:db})

module.exports = { db, User, Board, Cheese }