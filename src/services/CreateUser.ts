interface TechObject {
  title: string;
  experience: number;
}

interface  CreteUserData {
  name?: string,
  email: string,
  password: string,
  techs: string[]
}

export default function createUser({name, email, password}: CreteUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;
}