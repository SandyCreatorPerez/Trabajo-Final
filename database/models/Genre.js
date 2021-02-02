const Sequelize = require ('sequelize');
const sequelize = require('../../database'); 

const Genre = sequelize.define('Genre',{
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
    name:DataTypes.STRING
    , 
    ranking: DataTypes.DECIMAL
    , 
    active:DataTypes.INTEGER
    },

    {timestamps: false,
    tableName: 'genres'
    });


module.exports = Genre;