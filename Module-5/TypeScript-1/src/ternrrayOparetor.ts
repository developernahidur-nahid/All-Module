//? : rernary Operator :
// ?? : nullish Oparator
// ?. Optinoal  :

//* ?: rernary Operator :
const mareyd = (age: number) => {
  return age >= 21 ? "Yes" : "No";
};
console.log(mareyd(23));  // --> output = [Yes]

//* ?? : nullish Oparator
const value = "Nahidur";
const user = value ?? "you are gest user";
console.log(user); // --> output = [Nahidur]

//* ?. Optinoal  :
const user1: {
  org: "Web Deploper";  
  firstname: string;
  midname?: string;  
  lastname: string;
  age: number;
  id: number;
} = {
  org: "Web Deploper",
  firstname: "Nahidur",
  midname: "Rohman",
  lastname: "Nahid",
  age: 17,
  id: 111,
}; 

const option = user1?.midname;
console.log(option); // --> output =  [Rohman]