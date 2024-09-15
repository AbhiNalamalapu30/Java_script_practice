let data = new Promise((resolve,reject)=>{
let x = 10
let y = 1

if(x==y){
resolve();
}else{
reject();
}
})
data.then((function(){
console.log('they are equal')
})).catch(function(){
    console.log('they are not equal');
});

// let data1= new Promise((resolve,reject)=>{
// let x = 10
// let y = 1

// if(x==y){
// resolve();
// }else{
// reject();
// }
// })
// data.then((function(){
// console.log('they are equal')
// })).catch(function(){
// console.log('they are not equal')
// })

// let data3 = new Promise(()=>{
// let t = 10
// o = 1

// if(t+o){
// resolve();
// }else{
// reject();
// }
// })
// data.then((function(){
// console.log('they are eual')
// })).catch(function(){
// console.log('they are not')
// })


// let sum = function(a,b){
// return new Promise((resolve,reject) =>{
//     let checker = 'notebook'
//     let flip = checker.split('').reverse().join('')
//     if(checker==flip){
//     resolve('it is plaindorme')
//     }
// else{
//     reject('it is not palidorme')
// }
// })}

// async function finalresult(a,b){
//     let result = await sum(a);
//     console.log(result);
// }
// finalresult(1,1)
//palindorme checker

let loop = new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 1; i < 11; i++) {
        sum = sum + i
    }
    console.log(sum)
    if (sum) {
         resolve(sum)
         }
    else { 
        reject('unexcpeted error') 
    }
})
loop.then((function () {
    console.log('sum of ten')
})).catch(function () {
    console.log('no sum of ten');
});











