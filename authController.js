const db = require('../db')


class AuthController {
    async registration (req, res) {
        try{
            const user_id = req.body.user_id
            const text = req.body.text
            const sql = 'INSERT INTO posts(user_id, post) VALUES(? ?)' 
            
             db.query(sql, [email, password], function(err, results) {
                if(err) console.log(err);
                else console.log("Completed");
             })

        } catch(e) {
           
        }
    }
    async login (req, res) {
        try{
          
            
        }
        catch (e){
        
        }
    }

  

    

}

module.exports = new AuthController()

