module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
        },
        ranking: {
            type: dataTypes.INTEGER(10),
        },
        active: {
            type: dataTypes.INTEGER(1),    
        },
    };
    let config = {
        tableName: 'genres',
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: true
    };
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {
        Genre.hasMany(models.Pelicula, {
            as: 'peliculas',
            foreignKey: 'genre_id'
        })
    };

    return Genre;
}