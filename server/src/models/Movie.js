module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
    moviename: DataTypes.STRING,
    director: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    status: DataTypes.STRING
    })
    Movie.prototype.comparePassword = function (password) {
    if (password == this.password) {
        return true
 }
 return false
 }
 Movie.associate = function (models) {}
 return Movie
}