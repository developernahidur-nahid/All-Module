class Animel {
  name: string;
  species: number;
  sound: string;

  constructor(name: string, species: number, sound: string) {
    this.name=name,
    this.species=species,
    this.sound=sound
  }

  makeSound(){
    console.log(`${this.name} is meking sound: ${this.sound}`);
  } 
}

const Dog = new Animel("dog", 15, "gew gew");
const Cat = new Animel("cat", 16, "meaw meaw");
//* console.log(Dog);
//* console.log(Cat);
Dog.makeSound();
Cat.makeSound();





// class Animel {
//   constructor(public name: string, public species: number, public sound: string) {

//   }

//   makeSound(){
//     console.log(`${this.name} is meking sound: ${this.sound}`);
//   } 
// }

// const Dog = new Animel("dog", 15, "gew gew");
// const Cat = new Animel("cat", 16, "meaw meaw");
 // console.log(Dog);
 // console.log(Cat);
// Dog.makeSound();
// Cat.makeSound();
