function robot(name){
this.name=name
}
robot.prototype.greet=function(){
    console.log(`hello, my name is ${this.name}`)
}
let Robot1= new robot('sofia')
console.log(Robot1)
console.log(Robot1.greet())

let Robot2=new robot('megan')
console.log(Robot2)
console.log(Robot2.greet())


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