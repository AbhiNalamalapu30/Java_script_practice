let data = new Promise((resolve,reject)=>{
    let tester = 'racecar'
    let flip = tester.split('').reverse().join('')
    
    if(flip === tester){
        resolve();
    }else{
        reject();
    }
})
data.then((function(){
    console.log('it is palindorme')
})).catch(function(){
    console.log('it is not');
})

//---------------------------------------

let fibbonaci = new Promise((resolve,reject) =>{
let temp = 0
let next = 1
for(let i =1;let=10;i++ ){
    temp = prev
    prev = next 
    
}
if(next = prev+temp){
    resolve()
}else{
    reject()
}
})

data.then((function(){
    console.log('it is palindorme')
})).catch(function(){
    console.log('it is not');
})


let Result = function add(a,b){
    return a+b
}
console.log(Result(1,20))
