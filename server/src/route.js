const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const movieController = require('./controllers/movieController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)
     app.get('/movies', movieController.index)
     // create user
     app.post('/user', UserController.create)
     app.post('/movie', movieController.create)
     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)
     app.put('/movie/:movieId', movieController.put)
     // delete user
     app.delete('/user/:userId', UserController.delete)
     app.delete('/movie/:movieId', movieController.delete)
     // get all user
     app.get('/user/:userId', UserController.show)
     app.get('/movie/:movieId', movieController.show)
     // login
     app.post('/login', UserAuthenController.login)


}   