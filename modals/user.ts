import { Schema, model } from 'mongoose';
import encyptPassword from '@/helpers/password';

export interface IUser {
  email: string;
  nickname: string;
  password: string;
  avatar?: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    default: 'master user',
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '',
  },
});

UserSchema.pre('save', async function (next) {
  const user: IUser = this;
  const hashedPassword = await encyptPassword(user['password']);
  if (!hashedPassword) {
    return next(new Error('Error in hashing password'));
  }
  user['password'] = hashedPassword;
  next();
});

export default model<IUser>('User', UserSchema);
