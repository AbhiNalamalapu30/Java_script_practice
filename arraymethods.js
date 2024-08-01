let tasks = []
tasks.push('do laundry','buy groceries','clean room')
tasks.unshift('finish homework')
console.log(tasks)


// // // indexing is done by console.log(tasks[num])

let arr8 = ['1','3','30','2']
let results = arr8.map((item => item*3))
console.log(results)

// // // map method


// // let array =[9,6,8,4,2,1]
// // let a =[]
// // for(let i = array.length - 1; i >=0; i--) {
// //     let b= array[i]
// //    a.push(b)


// // }


// // console.log(a)
// // // revrsed array loop

let arr1 = ['banana','apple','orange','watermelon', 'grapes']
console.log(arr1.slice(1,3));
console.log(arr1.slice(3,5));
//slice method


let arr2= [8,9,2,5,7];
console.log(
arr2.sort(function(a,b){
    return b-a;
})
);
// //sort desc



let scores = [55, 60, 70, 85, 90];
let result = scores.every(item=>item>50)
console.log(result)
//every method



let numbers = [4, 2, 5, 1, 3]
numbers.sort((a, b) => a - b)
//sort

let fruits = ['apple', 'banana', 'mango', 'orange']
console.log(fruits.indexOf('mango'))
//indexof





let arr = ["apple", "banana", "cherry", "date", "fig"]
console.log(arr.splice(3,1,'grape'))
console.log(arr)
//splice


const num =  [8, 2, 3, 9, 5]
console.log(num.reduce((a,b)=>a*b))
//reduce

const fill = new Array(10)
console.log(fill.fill(1,0,5))
//fill

let even = [2, 4, 6, 12, 14, 16]
console.log(even.findIndex(num=>num>10))  
//FindIndex

let str = "apple,banana,orange";
let fruit = str.split(',');
console.log(fruit);
//split method

const each = [10, 20, 30, 40, 50]
each.forEach(x=>{
    console.log()
})
//for each

let numb = [1, 2, 3];
numb.forEach(num => console.log(num * 2));

const e = [10, 20, 30, 40, 50]
e.forEach(x=>{
    console.log(x)
})

let nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArray.flat(5,6))

//flat


let word = ["Hello", "world"];
let sentence = word.join(" ");
console.log(sentence);
//join

let num = [1, 2, 3, 4, 5]; 
num.reverse();
console.log(num)
//reverse

let fruits = ["apple", "banana", "mango", "orange", "pineapple"];
console.log(fruits.includes('watermelon'))
//includes