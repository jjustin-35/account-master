import mongoose from 'mongoose';
import { MONGODB_URI } from '@/constants/mongodbInfo';

const connectMongodb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongodb;
