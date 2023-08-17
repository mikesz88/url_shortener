import bcrypt from 'bcrypt';

// to be used for password
export const saltValue = async (value: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(value, salt);
};

// to be used for password comparison
export const matchSaltedValue = async (value: string, saltedValue: string) => {
  return await bcrypt.compare(value, saltedValue);
};
