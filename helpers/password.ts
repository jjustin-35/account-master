import bcrypt from 'bcrypt';

const saltRounds = 10;

const encyptPassword = async (password: string): Promise<string | null> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default encyptPassword;
