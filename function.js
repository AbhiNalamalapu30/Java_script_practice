function greet (name){
    return `Hello ${name}`
}

console.log(greet('Abhi'))

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

function actual(callback){ //2
  callback(9,2) //3
}
function callback(a,b){ //4
  console.log(a*b) //5  - 18
}

actual(callback) // 1

//function expression witout return

let result1 = function add (a,b){
  return a*b

}
console.log(1,2)
//----------------------------------------------------------------------------------------------------
function palindrome(checkPalindrome){
    let checkedstring = 'dad'
  
    checkPalindrome(checkedstring) 
  } 
  function checkPalindrome(checkedstring){
    let reversedString = checkedstring.split('').reverse().join('')
  
  if(reversedString === checkedstring){
    console.log('It is a Palindrome')
  }
  else{
    console.log('It is not a Palindrome')
  }
  //--------------------------------------------  
  } 
  palindrome(checkPalindrome) 

function actual(callback){
  let tester = 'dad'

  callback(tester)
}
function callback(tester){
  let fliped = tester.split('').reverse().join('')

  if(fliped===tester){
    console.log('its is plaindorme')
  }
  else{
    console.log('it is not plaindorme')
  }
}
actual(callback)















  //plaindrome function


function actual(callback){//2
  callback(9,8)//3
}
function callback(a,b){//4
  console.log(a*b)//5
}
actual(callback)//1
//callback function

