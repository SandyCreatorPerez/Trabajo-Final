const Sequelize = require ('sequelize');
const sequelize = require('../../database'); 

const Movie = sequelize.define('Movie',{
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
    title:DataTypes.STRING
    ,
    rating: DataTypes.DECIMAL
    , 
    awards: DataTypes.INTEGER
    , 
    release_date:DataTypes.DATEONLY
    ,
    length:  DataTypes.INTEGER
    , 
    genre_id: DataTypes.INTEGER
    ,
    deleted_at: Datatypes.DATEONLY

    },

    {timestamps: false,
    tableName: 'movies'
    });


module.exports = Movie;