import bcrypt from "bcrypt";
export const hashpassword = async (password) => {
  try {
    const setRounds = 10;
    const hashedPassword = await bcrypt.hash(password, setRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
