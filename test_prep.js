


function anagram(s,t){
    if(s.lenght !== t.lenght){
        return false; 
    }
    return s.split('').sort().join('')== t.split('').sort().join('')   
}
console.log(anagram('abhi','bhai'))
//anagram--------------------------------------------
let prev = 0
let next = 1

for(i = 1;i<=10;i++)
  {
temp = prev  
prev = next  
next = temp+ prev 

console.log(next)
}     
//fibblaci

function actual(callback){
    let check = 'dad'
    callback(check)
}
function callback(check){
    let flip = check.split('').reverse().join('')

    if(flip===check)
        console.log('it is plaindorme')

    else{
        console.log('it is not')
    }
}
actual(callback)
//palindorme
for(i = 1;i<=5;i++){
    let s =' *'
    console.log(s.repeat(i))
}
//star pattern
let numbers = [4, 20, 51, 19, 32]
console.log(numbers.sort((a, b) => b - a))
console.log(numbers[1])
//second largest number in the array
//---------------------------------------
let arr = [1,5,5,7,89,2,5,2]

function Dupli(arr) {
return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(Dupli(arr));
//duplicates







