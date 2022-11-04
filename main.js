const { db, User, Board, Cheese } = require('./db')

function createAssociations () {

    // create the associations here
    User.hasMany(Board);
    Board.belongsTo(User);

    Cheese.belongsToMany(Board, {
        through: 'Cheese_Board'
    });
    Board.belongsToMany(Cheese, {
        through: 'Cheese_Board'
    });

};


//async function main () {
 //   await db.query(`DROP TABLE IF EXISTS user `)

 //   await db.query(`CREATE TABLE IF NOT EXISTS user(
 //       id INTEGER PRIMARY KEY,

//    )`)
///}