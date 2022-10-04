const db = require('../db')

class apiController{

async getUsers (req, res){
    try{
     
       const users = db.query("SELECT * FROM users",function(err, results) {
        if(err){
            console.log(err);
        } 
        else {
          res.send(results)
        } 
       })

    }catch(e){
     
    }
} 
async addPosts (req, res) {
    try{
        const post_id = req.body.user_id
        const post = req.body.post
        const sql = 'INSERT INTO posts(user_id, post) VALUES(? ?)' 
        
         db.query(sql, [post_id, post], function(err, results) {
            if(err) console.log(err);
            else console.log("Completed");
         })

    } catch(e) {
       
    }
}


async getPosts (req, res){
    try{
     
    } catch(e){
        console.log(e)
    }
    
}

async getCommentsByPost (req, res){
    try{
     
    } catch(e){
        console.log(e)
    }
    
}

}


module.exports = new apiController()
