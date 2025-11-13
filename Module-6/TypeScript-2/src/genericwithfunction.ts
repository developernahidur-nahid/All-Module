const createDynamicArray = <T>(value: T) => {
  return [value];
};

const stringArray = createDynamicArray(111);

console.log(stringArray);

const createDynamic = <T, N>(peram1: T, peram2: N) => {
  return [peram1, peram2];
};

console.log(createDynamic(false, 43));

const addStudentToCourse = <T>(studentInfo: T) =>{
    return {
        Course : "Next Levle",
        ...studentInfo
    }
}

const student1 = {
  name: "Labi",
  role: 15,
  class: "Ten",
};

const student2 = {
  name: "Hakim",
  role: 25,
  class: "Ten",
};

console.log(addStudentToCourse(student1));
