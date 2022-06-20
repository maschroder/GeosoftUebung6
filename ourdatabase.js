/* Template to add to and retrieve documents from a MongoDB database
   The template is adapte from https://www.mongodb.com/docs/drivers/node/current/quick-start/ and 
   https://www.npmjs.com/package/mongodb 
 */

   const { MongoClient } = require('mongodb')

   const url = 'mongodb://127.0.0.1:27017' // connection URL
   
   const client = new MongoClient(url) // mongodb client
   
   const dbName = 'mydb' // database name
   
   const collectionName = 'PlacesMuenster' // collection name
   
   let db;
   
   async function main () 
   {
   
         await client.connect()
         console.log('Connected successfully to server')
   
         db = client.db(dbName)
   
         const collection = db.collection(collectionName)
   
         const data = [
          {
            "type": "FeatureCollection",
            "features": [
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Hauptbahnhof",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.634876,
            51.957004
            ]
            },
            "id": "1f1c1e76-de1e-4bf5-b927-0a0bdb59a10e"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Botanischer Garten",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.610287,
            51.963638
            ]
            },
            "id": "3145096c-2e80-469d-90ad-4f64afe56603"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Schlossplatz",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.616133,
            51.963513
            ]
            },
            "id": "3d09fee2-680b-4f23-b8c4-2550523b68ac"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Allwetterzoo Münster",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.587046,
            51.94814
            ]
            },
            "id": "b06930ab-076c-4d51-8443-9a3027865287"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Lambertikirche",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.628653,
            51.962898
            ]
            },
            "id": "74d44302-eab5-4547-9c93-90d5b8d2c0f9"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Institut für Geographie",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.595725,
            51.969422
            ]
            },
            "id": "29b749c4-b86e-47ba-ab1a-f39bb31e64ae"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Aasee",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.604563,
            51.949979
            ]
            },
            "id": "2a6069e1-d8d2-47e9-9a24-a126abd43f17"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Aaseekugeln",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.618322,
            51.956997
            ]
            },
            "id": "0e56c92d-a3ef-4386-b038-7782314f788e"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Prinzipalmarkt",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.628068,
            51.962039
            ]
            },
            "id": "8adf38a6-c8a6-4369-9806-d9512ff5ca6f"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Historisches Rathaus Münster",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.628025,
            51.961701
            ]
            },
            "id": "25b1bb91-2555-4970-9c05-e960e39e4aae"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Paulusdom",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.625337,
            51.963017
            ]
            },
            "id": "294c1ad7-017b-4964-92e0-1335cef6e9b6"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Mensa am Ring",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.600187,
            51.965512
            ]
            },
            "id": "f55d4b61-0b12-4286-b622-97cb3bdbdafc"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "LWL-Museum",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.624277,
            51.961387
            ]
            },
            "id": "a9672049-a000-47e8-85c5-9b14f55c6d81"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Mensa am Aasee",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.617179,
            51.955609
            ]
            },
            "id": "add64029-e251-41b1-9315-a55e9001754d"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Mensa Bispinghof",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.619486,
            51.960323
            ]
            },
            "id": "a54f9243-fabc-46cd-8d56-02365f1ffd12"
            },
            {
            "type": "Feature",
            "properties": {
            "shape": "Marker",
            "name": "Mensa Da Vinci",
            "category": "default"
            },
            "geometry": {
            "type": "Point",
            "coordinates": [
            7.601884,
            51.97511
            ]
            },
            "id": "50a849e1-315c-40a9-b7e2-84e9569b2730"
            }
            ]
            }
         ]
   
       // insert new documents in my collection
        insertDocuments(collection, data)
   
        // count the number of rows in the collection
       // countRows (collection)
   
        // find documents 
       // findDocuments(collection)
     
   }
   
   main()
       .then(console.log)
       .catch(console.error)
       .finally(() => setTimeout(() => {client.close()}, 1500)) // wait a bit before closing the connection, if not the whole code can raise an error, see https://stackoverflow.com/questions/72155712/mongoruntimeerror-connection-pool-closed
   
      
   /* Definition of the different functions starting here */
   
   // function to insert documents in the collection
   // adapted from https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertMany/
   const insertDocuments = async function (collection, data) 
   {
   
       // this option prevents additional documents from being inserted if one fails
       const options = { ordered: true }
       const result = await collection.insertMany(data, options)
       console.log(`${result.insertedCount} documents were inserted in the collection`)
   
   }
   
   // count the number of rows in a collection
   // adapted from https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/
   const countRows = async function(collection)
   {
       const estimate = await collection.estimatedDocumentCount()
       console.log(`Estimated number of documents in the current collection: ${estimate}`)
   
   }
   
   // find all documents in a collection
   // adapted from https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
   const findDocuments = async function(collection) 
   {
      const cursor =  collection.find({})
   
      const results = await cursor.toArray()
      
      if (results.length == 0)
      {
   
       console.log("No documents found!")
   
      }
      else
      {
       console.log(`Found ${results.length} documents in the collection...`);
       console.log(results)
   
      }
   
       /* // function to access the documents one by one
       await cursor.forEach((doc) =>
       {
           console.log(doc)
   
       })
       */
   
   }

  const findPois = async  () => {
    const collection = db.collection("pois")
    const cursor =  collection.find({})
   
    const results = await cursor.toArray();
    return results;
   }

module.exports = { findPois }