const addStudentToCourse = <T extends{name:string; role: number;}>(studentInfo: T) =>{
    return {
        Course : "Next Levle",
        ...studentInfo
    }
}

const student1 = {
  name: "Labi",
  role: 15,
  
};

const student2 = {
  name: "Hakim",
  role: 25,
  class: "Ten",
};
const student3 = {
  name: "Tayana",
  role: 25,
  class: "Ten",
  
  id: 111
};

console.log(addStudentToCourse(student3));/* output ---> {
                                                  Course: 'Next Levle',
                                                  name: 'Tayana',
                                                  role: 25,
                                                  class: 'Ten',
                                                  age: 17,
                                                  id: 111
                                                  } */
