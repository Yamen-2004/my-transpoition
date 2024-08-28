const express = require('express');
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');





const uri = "mongodb+srv://Yamen:yamen2000910732@cluster0.wdoxeiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");  
    const database = client.db("Transpoition")
    const collection = database.collection("drivers");

    app.get("/users:id",async(req,res)=>{
        try{
            const result = await collection.findOne({_id:new ObjectId(req.params.id)})
            res.send(result)
            
        }
        catch(e){
            console.error(e.message)
        }
        
    })
    
  

  } 
  catch (e) {
    console.error(e);
  }
}
run().catch(console.dir);































app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);

});