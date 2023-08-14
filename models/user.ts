import { Model, Schema, model, models } from 'mongoose';

import { UserType } from '@/constants/types/modal';

import encryptPassword, { compareHashPassword } from '@/helpers/password';

interface IUserMethods {
  comparePassword(password: string): Promise<boolean>;
}

type UserModelType = Model<UserType, object, IUserMethods>;

const UserSchema = new Schema<UserType, UserModelType, IUserMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
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
  this: UserType,
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

export default models.User ||
  model<UserType, UserModelType>('User', UserSchema);
