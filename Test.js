

  for(let i = ['1','2','3','4','5'];i.length;i++){
    console.log(i)
    }

    //------------------------------------------ 
    //i=2

    //2>=0 = true

    //arr[2]=3

    //arr2 = [5,4,3]

    //-------------------------------------------

    //i = 1 

    //1>=0 = true

    //arr[1]=2

    //arr2 = [5,4,3,2]

    //--------------------------------------------

    //i=0

    //0>=0 = true

    //arr[0]=1

    //arr2 = [5,4,3,2,1]

    //---------------------------------------------


    // let numbers = 
    // let a = numbers.filter[numbers/2==0];
    // console.log(a)

let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function(a){
  return a%2 === 0
})

console.log(even);
// filter even numbers



let fruits = ["apple", "banana", "mango", "orange", "pineapple"];
console.log(fruits.includes('watermelon'))



let words = ["JavaScript", "is", "fun"];
console.log(words.join(' '))

let num = [1, 2, 3, 4, 5]; 
num.reverse();
console.log(num)

let nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArray.flat(5,6))

let array =[9,6,8,4,2,1]
let reversedArray =[]
for(let i = array.length - 1; i >=0; i--) {
    let valueAtIndex = array[i]
    reversedArray.push(valueAtIndex)

}

console.log(reversedArray)


let word = ["Hello", "world"];
let sentence = word.join(" ");
console.log(sentence);




