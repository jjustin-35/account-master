import mongoose from 'mongoose';
import { MONGODB_URI } from '@/config/mongodb';

const connectMongodb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongodb;
