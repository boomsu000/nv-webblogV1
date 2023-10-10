const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const movieController = require('./controllers/movieController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)
     app.get('/musers', movieController.index,movieController.index)
     // create user
     app.post('/user', UserController.create)
     app.post('/muser', movieController.create)
     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)
     app.put('/muser/:muserId', movieController.put)
     // delete user
     app.delete('/user/:userId', UserController.delete)
     app.delete('/muser/:muserId', movieController.delete)
     // get all user
     app.get('/user/:userId', UserController.show)
     app.get('/muser/:muserId', movieController.show)
     // login
     app.post('/login', UserAuthenController.login)


}   