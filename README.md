# MongoDB updateOne() Error: Incorrect Update Parameter

This repository demonstrates a common error when using the `updateOne()` method in MongoDB with Node.js.  The error arises from providing an incorrect update parameter - specifically using a string instead of the expected object.

## The Bug
The `bug.js` file contains code that attempts to update a document in a MongoDB collection. However, the `updateOne()` method is called with a string as the second argument, causing an error.

## The Solution
The `bugSolution.js` file demonstrates the correct way to use `updateOne()` by providing a properly formatted object for the update operation.

## How to reproduce
1. Ensure you have MongoDB installed and running.
2. Create a MongoDB database named `mydatabase` and a collection named `mycollection`.
3. Insert a document with `name: 'John Doe'` into the `mycollection`.
4. Run `node bug.js`.
5. Observe the error message.
6. Run `node bugSolution.js` to see the correct implementation.

This example highlights the importance of carefully reviewing the documentation for MongoDB driver methods to ensure proper argument usage.