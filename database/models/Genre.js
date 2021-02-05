
 
module.exports = (sequelize,dataTypes)=> {
const Genre = sequelize.define('Genre',{
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
    name:dataTypes.STRING
    , 
    ranking: dataTypes.DECIMAL
    , 
    active:dataTypes.INTEGER
    },

    {timestamps: false,
    tableName: 'genres'
    });
    return Genre; 
}

