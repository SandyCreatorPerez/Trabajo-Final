
module.exports = (sequelize,dataTypes)=> {
const Actor = sequelize.define('Actor',{
    id:{
        primaryKey: true,
        autoincrement: true, 
        type: dataTypes.INTEGER
    }, 
    created_at:{
        type:dataTypes.DATEONLY,
        allowNull: true

    }, 
    updated_at:dataTypes.DATEONLY
       //AllowNull por Dafault es True, 
    ,
    first_name:dataTypes.STRING
    ,
    last_name: dataTypes.STRING
    , 
    rating: dataTypes.DECIMAL
    , 
    favorite_movie_id:dataTypes.INTEGER
    },

    {timestamps: false,
    tableName: 'actors'
    });
    return Actor; 
}
