//* Object --> Interface
//* Array & Function --> Type Alice use kobo

type User = {
  id: number;
  name: string;
};

type Role = {
  role: "admin" | "user";
};

type newType = User & Role;

const user1: newType = {
  name: "Nahid",
  id: 111,
  role: "admin",
};

const user2: newType = {
  name: "Nisi",
  id: 222,
  role: "user",
};

//console.log(user1, user2);

//* InterFace
interface IUser {
  name: string;
  age: number;
}

interface newInterface extends IUser {
  role: "admin" | "user";
}

const users1: newInterface = {
  name: "NAhid",
  age: 17,
  role: "admin",
};

const users2: newInterface = {
  name: "Nila",
  age: 25,
  role: "user",
};

console.log(users1);

//* function using interface 

interface Iadd {
  (num1: number, num2: number): number;
}

const add: Iadd = (num1, num2) => num1 + num2;
console.log(add(5, 6));

const sum: Iadd = (num1, num2) => num1 - num2;
console.log(sum(5, 6));
