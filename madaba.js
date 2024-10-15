export function madabainfo(app,collection6) {
    return  app.get("/madaba/points",async (req,res)=>{
        try{
          const  result = await collection6.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    }