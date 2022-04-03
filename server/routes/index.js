const userRouter = require('./users')
const bottleRouter = require('./bottles')
const bottlesTypeRouter = require('./bottlestype')

module.exports = app => {
    app.use('/api/users', userRouter)
    app.use('/api/bottles', bottleRouter)
    app.use('/api/bottlestype', bottlesTypeRouter)
}
