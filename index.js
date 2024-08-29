import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import {OnedriverInfo,AlldriverInfo } from './drivers.js';
import {IrbidInfo,Irbid_ghor,Irbid_Oldghor,Irbid_amman,Irbid_khalil,Irbid_shamal} from './irbid.js';





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
    const collection2 = database.collection("Irbid");
    const collection3 = database.collection("Amman");


    // -----------------------------------------------------------------------------
    // drivers section below
    // -----------------------------------------------------------------------------

    app.get("/users/info",OnedriverInfo(app,collection,new ObjectId("66ceb2379d6c9212f0872366")))
    AlldriverInfo(app,collection) // id , email , password , name , phone,londitude,latitude,bus_number

    app.put("/long/lat/:id",async(req,res)=>{
      try{
  
        
        const body = req.body;
        collection.updateOne({_id: new ObjectId (req.params.id) },{$set:
          {"longtude":body.longtude,
            "latitude":body.latitude 
          }
          
          
        })
  
        console.log(`updaating document with id : ${req.params.id}`)
        res.send("done")
  
  
      }
      catch(error){
  res.send(error.message)
  console.log(error.message)
      }
    })
    // -----------------------------------------------------------------------------
    

    // -----------------------------------------------------------------------------
    // Irbid section below
    // -----------------------------------------------------------------------------

    IrbidInfo(app,collection2) //  to show all the points in irbid
    Irbid_ghor(app,collection2,new ObjectId("66ceb2e09d6c9212f0872367")) // to show all points of ghor in irbid
    Irbid_amman(app,collection2,new ObjectId("66cef55dab8174b03b3ab744")) // to show the point of amman in irbid
    Irbid_khalil(app,collection2,new ObjectId("66cef56bab8174b03b3ab745"))  // to show the point of khalil in irbid
    Irbid_shamal(app,collection2,new ObjectId("66cef536ab8174b03b3ab742"))  // to show the point of shamal in irbid
    Irbid_Oldghor(app,collection2,new ObjectId("66cef54aab8174b03b3ab743")) // to show the point of old ghor in irbid
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------

    // -----------------------------------------------------------------------------
    // Amman section below
    // -----------------------------------------------------------------------------


    


   


    
  

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