//dot vs bracket notation

const person ={
  name: "hero alam",
  age: 42,
  friends: ["karim"],
  salary: 100,
  10: "secret code",
  "hero-boss": "sdfds"


}
const heroName = person.name;
console.log(heroName)

//bracket notation
const heroName1 = person["name"]
console.log(heroName1)

const heroSecret = person[10]
console.log(heroSecret)

const heroBoss = person['hero-boss']
console.log(heroBoss)