//six javascript fundamentals that you need to know

// 1. variable --> let and const

let name ="Shanjida";
name = "Shanjida Islam";  //To reassign a variable, use let.


const countryName ="Bangladesh"; //`const` = no reassignment 

// 2. If-Else

num = 40;

if(num>=20 || num<=30){
  console.log("Yes");
}
else{
  console.log("No");
}


// 3. Array
const friends = ["Hero", "Sonia", "Muku", "Ali", "ovi", "priom"];
//console.log(friends.length)
//friends.push("Raier");
//friends.pop()
//friends.unshift("BD")
//friends.shift()
//console.log(friends.slice(2, 5))
//console.log(friends.splice(2, 5))

// 4.loop
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  console.log(element)
  
}

// 5. function
function sum (a, b){
  const result = a + b;
  return result;
}

const output = sum( 4, 5);
console.log(output);

// 6.object

const person ={
  name: "Shanjida",
  age: 23,
  friends: friends
}
console.log(person.name)
console.log(person.age)
console.log(friends)