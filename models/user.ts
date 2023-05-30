import { Model, Schema, model } from 'mongoose';
import encryptPassword, { compareHashPassword } from '@/helpers/password';

export interface IUser {
  email: string;
  nickname: string;
  password: string;
  avatar?: string;
}

interface IUserMethods {
  comparePassword(password: string): Promise<boolean>;
}

type UserModelType = Model<IUser, object, IUserMethods>;

const UserSchema = new Schema<IUser, UserModelType, IUserMethods>({
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

UserSchema.methods.comparePassword = async function (
  this: IUser,
  password: string,
): Promise<boolean> {
  return await compareHashPassword(password, this.password);
};

UserSchema.pre('save', async function (next) {
  const hashedPassword = await encryptPassword(this['password']);
  if (!hashedPassword) {
    return next(new Error('Error in hashing password'));
  }
  this['password'] = hashedPassword;
  next();
});

export default model<IUser, UserModelType>('User', UserSchema);
