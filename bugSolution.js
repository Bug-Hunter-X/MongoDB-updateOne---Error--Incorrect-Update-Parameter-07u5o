```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Make sure this URI is correct
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Correct update operation - using an object
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });

    console.log(result);
  } catch (err) {
    console.error('Error updating document:', err);
  } finally {
    await client.close();
  }
}

updateDocument();
```