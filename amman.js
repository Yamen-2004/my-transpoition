export function ammanInfo(app,collection3){     
    return  app.get("/amman/points",async (req,res)=>{
        try{
          const  result = await collection3.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })}