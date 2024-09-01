
//--------------------------------------------
function actual(callback){
  let test='race'
  callback(test)
}
function callback(test){
  let flip = test.split('').reverse().join('')

  if(test===flip){
    console.log('it is palindorme')
  }
  else{
    console.log('it is not plaindorme')
  }
}
actual(callback)
//-----------------------
function anagram(s,t){
  if(s.lenght!==t.lenght){
    return false
  }
  return s.split('').sort().join('')==t.split('').sort().join('')
}
console.log(anagram('heart','earth'))
//---------------------------------





let prev = 0
let next = 1

for(i = 1;i<=10;i++)
{
  temp = prev
  prev = next
  next = temp + prev

  console.log(next)
}
//---------------------
for(i=5;i>=1;i--){
  let star = '*'
  console.log(star.repeat(i))
}

//----------------------

let numbers = [1,34,67,31,89,345,2,5]
console.log(numbers.sort((a,b) => b-a))
console.log(numbers[1])