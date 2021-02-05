

module.exports = (sequelize,dataTypes)=> {
const Movie = sequelize.define('Movie',{
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
    title:dataTypes.STRING
    ,
    rating: dataTypes.DECIMAL
    , 
    awards: dataTypes.INTEGER
    , 
    release_date:dataTypes.DATEONLY
    ,
    length:  dataTypes.INTEGER
    , 
    genre_id: dataTypes.INTEGER
   
    },

    {timestamps: false,
    tableName: 'movies'
    });
    return Movie;
}

