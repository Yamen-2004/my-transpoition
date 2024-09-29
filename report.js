export function Addreport(app,collection4){     
    return  app.post("/report",async (req,res)=>{
        try{
            if (!req.body.report) {
                res.status(400).send("body is required")
            }
            await collection4.insertOne(req.body)
            res.send("done")
        }
        catch(e){
            console.error(e.message)
            res.send(e.message)
        }
        if (result.acknowledged==true){
            const inserteditemId  =await collection4.findOne({_id : result.insertedId});
            res.status(201).json(inserteditemId)

        }
    })}