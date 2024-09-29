// Description: This file contains the IrbidInfo function.
export function IrbidInfo(app,collection2){     
    return  app.get("/Irbid/points",async (req,res)=>{
        try{
          const  result = await collection2.find().toArray()  
          res.send(result)  
          
        }
        catch(e){
          console.error(e.message)
        }
      })}

