export function maanInfo(app,collection7) {
    return  app.get("/maan/points",async (req,res)=>{
        try{
          const  result = await collection7.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }