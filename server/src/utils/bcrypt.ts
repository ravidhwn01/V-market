import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hash(password, SALT);
};
