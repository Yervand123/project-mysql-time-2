const express =require('express')
const userRouter = require('./routes/apiRouter')
const authRouter = require('./routes/authRouter')

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())


app.use('/auth', authRouter)
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
    
})