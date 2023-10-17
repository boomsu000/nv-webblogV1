module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
    moviename: DataTypes.STRING,
    director: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    status: DataTypes.STRING
    })
 Movie.associate = function (models) {}
 return Movie
}