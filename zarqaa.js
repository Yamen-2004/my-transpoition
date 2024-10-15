export function zarqaainfo(app,collection7) {
    return  app.get("/zarqaa/points",async (req,res)=>{
        try{
          const  result = await collection7.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }