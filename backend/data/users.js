import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shukra Tamang",
    email: "shukratamang.npl@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sajil Shakya",
    email: "sajilshakya@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
