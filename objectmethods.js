let obj = {'person':'Abhi'}

let obj2 = {'job':'None'}

let result = Object.assign(obj,obj2)
console.log(result)

//assign method

car = {'brand':'lamborgini','model':'urus','year':'2018'}
let result1=Object.keys(car)
console.log(result1)

// object method

book = {'title':'wonder','author':'R. J. Palacio','pages':'310'}
let result2 =Object.values(book)
console.log(result2)

// value method

let student = {'name':'Abhi','grade':'9','school':'sycamore high school'}
let result3= Object.entries(student)
console.log(result3)
//entries method
let device = {'type':'power_bank','brand':'anker','model':'Anker 737'}
let result4 = Object.seal(device)
console.log(result4)

device.year = '2022'
//seal method
let game = {'name':'fortine','genre':'battle royale','platform':'xbox_ps5_pc'}
let result5 = Object.freeze(game)
console.log(result5)

game.genre = "survival"

//freeze method

let movie = {'name':'Avatar2','director':'james cameron','year':'2022'}
delete movie.year
console.log(movie)
//delete option

let pet = {'name':'dog','type':'golden retriver'}
pet.age='3'
console.log(pet)
//adD option
//------------------------------------------------------------------------------------------------------------------------------------------------
//================================================================================================================================================
let colors = ['red','purple','green','orange','blue']

for(const iteam of colors){
    console.log(iteam)
}

let student1 = {'name':'Abhi','grade':9,'subject':'math'}

for(let key in student1){
    console.log('object_keys' + ' - ' + key + " - " + 'object_values' + ' -' + student1[key])
}