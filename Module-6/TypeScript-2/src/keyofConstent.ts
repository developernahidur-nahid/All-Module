//* keyofConstnent

type student = {
  name: string;
  role: number;
  class: string;
  proved: boolean;
};

type student1 = "name" | "role" | "class" | "proved";
type student2 = keyof student;

const myStudent: student1 = "class";

type User = {
  org: "Web Deploper";
  name: {
    firstname: string;
    midname: string;
    lastname: string;
  };
  age: number;
  id: number;
};

const user1: User = {
  org: "Web Deploper",
  name: {
    firstname: "Nahidur",
    midname: "Rohman",
    lastname: "Nahid",
  },
  age: 17,
  id: 111,
};

const getPoor = <x>(obj: x, key: keyof x) => {
  return obj[key];
};

const result1 = getPoor(user1, "name");

console.log(result1);

const product = {
  brand: "hp",
};

const students = {
  name: "Alvi",
  id: 5530,
  class: "Eight",
};

const result2 = getPoor(product, "brand");
const result3 = getPoor(students,"class");
