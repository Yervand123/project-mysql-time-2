const express = require("express")
const PORT = process.env.PORT || 5000
const db = require('./db');
const app = express()
const authRouter = require('./Routes/authRouter')
const apiRouter = require('./Routes/apiRouter')
app.use(express.json())

  app.use('/auth', authRouter)
  app.use('/api', apiRouter)



app.get('/', (req, res) => {
  db.query("SELECT * FROM users", function(err, results) {
    if(err) {
      console.log(err);
   
    }
    else{
      console.log(results);
    }
})
})
      


app.listen(PORT, () => console.log(`Server Started on PORT : ${PORT}`
)) 

