import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hash(password, SALT);
};

export const comparePassword = (password: string, hash: string) => {
  const comparePassword = bcrypt.compare(password, hash);
  console.log(comparePassword);
  return comparePassword;
};
