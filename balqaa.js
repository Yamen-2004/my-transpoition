export function balqaainfo(app,collection6) {
    return  app.get("/balqaa/points",async (req,res)=>{
        try{
          const  result = await collection6.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }