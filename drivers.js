


export function AlldriverInfo(app,collection){
    return app.get("/users",async(req,res)=>{
      try{
          const result = await collection.find().toArray()
          res.send(result)
          
          
      }
      catch(e){
          console.error(e.message)
      }})
    
    }

export  function OnedriverInfo(app,collection,id){
    return app.get("/users/info",async(req,res)=>{
      try{
          const result = await collection.findOne({_id :id})
          res.send(result)
          
          
      }
      catch(e){
          console.error(e.message)
      }})
  }