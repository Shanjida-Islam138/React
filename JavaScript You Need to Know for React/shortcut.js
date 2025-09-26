//false value
// 0, -0, "", null, undefined

//true value--> "sdsfsd", 23456, true, {}

const test = 'Shanjida'
// if(test){
//   console.log('Its a truthy value')
// }
// else{
//   console.log('Falsy Value')
// }

//ternary operator

test ? console.log("its a truthy value") : console.log("falsy value")

const num = 30
const result = (num>=10 && num<50) ? "true":"false"
console.log(result)


const isActive = false

const showUser = () => console.log("Show user green")
const hideUser = () => console.log("hide User")

isActive ? showUser() : hideUser()

isActive && showUser()
isActive || hideUser()

let number = "10"
const result1 = +num
console.log(typeof result1)