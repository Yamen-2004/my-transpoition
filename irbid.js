// all point of buses going from irbid to other cities
// all point of buses coming to irbid from other cities
// costs for each bus from irbid to other cities
// costs for each bus from other cities to irbid
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

export function Irbid_ghor (app,collection2,id){
    return  app.get("/Irbid/points/ghor",async (req,res)=>{
        try{
            const result = await collection2.findOne({_id : id})
            res.send(result)
        }
        catch(e){
            console.error(e.message)
        }
    
        })}

        export function Irbid_amman (app,collection2,id){
            return  app.get("/Irbid/points/amman",async (req,res)=>{
                try{
                    const result = await collection2.findOne({_id : id})
                    res.send(result)
                }
                catch(e){
                    console.error(e.message)
                }
            
                })}
                export function Irbid_shamal (app,collection2,id){
                    return  app.get("/Irbid/points/shamal",async (req,res)=>{
                        try{
                            const result = await collection2.findOne({_id : id})
                            res.send(result)
                        }
                        catch(e){
                            console.error(e.message)
                        }
                    
                        })}
                        export function Irbid_khalil (app,collection2,id){
                            return  app.get("/Irbid/points/khalil",async (req,res)=>{
                                try{
                                    const result = await collection2.findOne({_id : id})
                                    res.send(result)
                                }
                                catch(e){
                                    console.error(e.message)
                                }
                            
                                })}
                                export function Irbid_Oldghor (app,collection2,id){
                                    return  app.get("/Irbid/points/Oldghor",async (req,res)=>{
                                        try{
                                            const result = await collection2.findOne({_id : id})
                                            res.send(result)
                                        }
                                        catch(e){
                                            console.error(e.message)
                                        }
                                    
                                        })}
                                                                                

