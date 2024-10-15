export function ajlouninfo(app,collection5) {
    return  app.get("/ajloun/points",async (req,res)=>{
        try{
          const  result = await collection5.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }
