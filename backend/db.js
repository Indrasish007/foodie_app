// backend/db.js
const { MongoClient } = require('mongodb');

// Local MongoDB connection string
const uri = 'mongodb://127.0.0.1:27017/foodie_app';
let db = null;
let client = null;

async function connectToDatabase() {
  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('foodie_app');
    console.log('✅ Connected to MongoDB successfully');
    console.log('📊 Database: foodie_app');
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

function getDatabase() {
  if (!db) {
    throw new Error('Database not connected. Call connectToDatabase first.');
  }
  return db;
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('📴 MongoDB connection closed.');
    process.exit(0);
  }
});

module.exports = {
  connectToDatabase,
  getDatabase
};