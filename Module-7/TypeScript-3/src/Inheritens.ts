class Preant {
    
}



class Student {
  name: string;
  role: number;
  id: number;

  constructor(name: string, role: number, id: number) {
    this.name=name,
    this.role=role,
    this.id=id
  }

    GoodStudent(herId: string){
    console.log(`${this.name} pora lekha balo lage na. her role ${this.role} & tar bortoman id ${herId}`);
  } 

}

const sudent1 = new Student("Nahid", 50, 111);

sudent1.GoodStudent("111");


class Teacher {
  name: string;
  diparment: string;
  id: number;

  constructor(name: string, diparment: string, id: number) {
    this.name=name,
    this.diparment=diparment,
    this.id=id
  }

    GoodTeacher(herId: string){
    console.log(`${this.name} sir valo ict class koran and unar diparment: ${this.diparment} and sir er bortoman id ${herId}.`);
  } 

    TakeClass(herId: number){
    console.log(`${this.name} sir proti din 4 ta class koren and unar diparment: ${this.diparment} & tar bortoman id ${herId}`);
  } 

}

const Teacher1 = new Teacher("Sumon", "[ ICT ]", 901);
Teacher1.GoodTeacher("901");
Teacher1.TakeClass(901);