// backend/server.js
const express = require('express');
const cors = require('cors');
const { connectToDatabase, getDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: '🍕 Foodie App Backend API',
    status: 'Running',
    database: 'Connected to MongoDB'
  });
});

// Test MongoDB connection route
app.get('/api/test-db', async (req, res) => {
  try {
    const db = getDatabase();
    const result = await db.admin().ping();
    res.json({ 
      message: '✅ Database connection successful',
      ping: result
    });
  } catch (error) {
    res.status(500).json({ 
      message: '❌ Database connection failed',
      error: error.message 
    });
  }
});

// Sample food routes
app.get('/api/foods', async (req, res) => {
  try {
    const db = getDatabase();
    const foods = await db.collection('foods').find({}).toArray();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/foods', async (req, res) => {
  try {
    const db = getDatabase();
    const { name, price, description, category } = req.body;
    
    const newFood = {
      name,
      price: parseFloat(price),
      description,
      category,
      createdAt: new Date()
    };
    
    const result = await db.collection('foods').insertOne(newFood);
    res.status(201).json({
      message: 'Food item added successfully',
      foodId: result.insertedId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
async function startServer() {
  try {
    await connectToDatabase();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Test database: http://localhost:${PORT}/api/test-db`);
      console.log(`🍔 Foods API: http://localhost:${PORT}/api/foods`);
    });
    
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();