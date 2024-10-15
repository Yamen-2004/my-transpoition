export function tafilehInfo(app,collection7) {
    return  app.get("/tafileh/points",async (req,res)=>{
        try{
          const  result = await collection7.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }