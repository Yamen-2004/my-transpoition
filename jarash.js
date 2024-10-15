export function jarashInfo(app,collection7) {
    return  app.get("/jarash/points",async (req,res)=>{
        try{
          const  result = await collection7.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })
    } 