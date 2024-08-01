function greet (name){
    return `Hello ${name}`
}

console.log(greet(',World!'))

//function declaration
let Result = function add(a,b){
    return a+b
}
console.log(Result(1,20))


let multiply = (x, y) => {
     return x * y ;
}
console.log(multiply(100, 3));

let square = (x) => {
    return x*x;
      }
      console.log(square(5,5))

//arrow function

let result = function add(a,b){
    console.log(a+b)
}
result(1,1)


//function expression witout return

let result1 = function add (a,b){
  return a*b

}
console.log(1,2)
//function expression


//callback function
checker1='racecar'
function actual(callback){
    if(checker1===checker1.split('').reverse().join('')){
        console.log('it is parndorm')
    }
}
if(checker1!==checker1.split('').reverse().join('')){
    console.log('it is not parndorm')
}

actual(callback)
 







