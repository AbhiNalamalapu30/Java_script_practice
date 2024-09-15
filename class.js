class Animal {

    constructor(name,sound){
      this.name = name;
      this.sound = sound;
    }

    makesound(){  //method 
    return(`${this.name}goes ${this.sound}`)
    }

}
let dog = new Animal ('dog_','ruff')
console.log(dog)
console.log(dog.makesound())

let cat = new Animal('cat_','meow')
console.log(cat)
console.log(cat.makesound())

class Book {

    constructor(Title,author){
      this.Title =Title;
      this.author = author;
    }

    getdetails(){  //method 
    return(`${this.Title}${this.author}`)
    }

}
let book = new Book ('wonder_','R.J.palacio')
console.log(book)
console.log(book.getdetails())



class Student{
  constructor(name,grade){
    this.name=name
    this.grade=grade

  }
  introducethatlogs(){
    return(`Hi,this is ${this.name}I am in ${this.grade}`)
  }
}
let person = new Student(' Abhi ',' 9th.')
console.log(person)
console.log(person.introducethatlogs())

let person2 = new Student(' Ashrith  ',' 7th grade.')
console.log(person2)
console.log(person2.introducethatlogs())







