// let data = new Promise((resolve,reject)=>{
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
//     console.log('they are not equal');
// });

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


let sum = function(a,b){
return new Promise((resolve,reject) =>{
    let checker = 'dpj'
    let flip = checker.split('').reverse().join('')
try{
    if(checker==flip){
    resolve('it is plaindorme')
    }
    else{
    resolve('it is not')
    }
}catch (err){
    reject(err)
}
});
};

// async function finalresult(a,b){
//     let result = await sum(a);
//     console.log(result);
// }
// finalresult(1,1)








