import { getUser } from "./unllableUnkoneNever";

const myInfo = {
  name: "nahid",
  id: 111,
  age: 17,
  class_name: "SSC B",
  F_names: {
    F1: "Rafi",
    F2: "Ismail",
    F3: "jumon",
  },
  class_N0: 101,
  students: 160,
};

const {
  F_names: { F1, F2, F3 },
} = myInfo;
const {
  F_names: { F1: myF },
  id,
} = myInfo;
const { id: myid, age, class_name } = myInfo;

// console.log(myInfo.F_names.F3); // ---> output jumon
// console.log(id,age); //output --> 111 17
// console.log(class_name) //output --> SSC B
// console.log(myF, F2, F3); //output --> Rafi Ismail jumon
// console.log(myF,id); //output --> Rafi 111
// console.log(myid); //output --> 111

const bundu = ["Sagor", "Abir", "Adiba"];

const [, , FF] = bundu;

console.log(FF); // ---> output Adiba
getUser(null);
