import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

let cachedConnection: typeof mongoose | null = null;

export async function connectToDatabase() {
  if (cachedConnection) {
    return { connection: cachedConnection };
  }

  try {
    const connection = await mongoose.connect(MONGODB_URI);
    cachedConnection = connection;
    console.log('Connected to MongoDB');
    return { connection };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Could not connect to database');
  }
} 