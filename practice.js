function student(name,grade){
  this.name=name
  this.grade=grade
}
student.prototype.details=function(){
  console.log(`hello, my name is ${this.name}`,`I am in ${this.grade}`)
}
let student1 = new student('Abhi','9th')
console.log(student1)
console.log(student1.details())

let student2 = new student('ashrith','7th')
console.log(student2)
console.log(student2.details())

class Worker{
constructor(age,job){
  this.age=age
  this.job=job
}
introducethatlogs(){
 return`${this.age}${this.job}`
}
}

let worker1=new Worker('30 ','no_job')
console.log(worker1)
console.log(worker1.introducethatlogs())

