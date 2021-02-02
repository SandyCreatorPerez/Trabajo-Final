const Sequelize = require ('sequelize');
const sequelize = require('../../database'); 

const Actor = sequelize.define('Actor',{
    id:{
        primarykey: true,
        autoincrement: true, 
        type: DataTypes.INTEGER
    }, 
    created_at:{
        type:DataTypes.DATEONLY,
        allowNull: true

    }, 
    updated_at:DataTypes.DATEONLY
       //AllowNull por Dafault es True, 
    ,
    first_name:DataTypes.STRING
    ,
    last_name: DataTypes.STRING
    , 
    rating: DataTypes.DECIMAL
    , 
    favorite_movie_id:DataTypes.INTEGER
    },

    {timestamps: false,
    tableName: 'actors'
    });


module.exports = Actor;