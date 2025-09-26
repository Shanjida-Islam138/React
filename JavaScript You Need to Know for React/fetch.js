//JSON
const person ={
  name: "Nobita",
  age: 23,
  frineds:["sonia","Muku","Raier","priom", "Nafisa"],
  family:{
    fatherName:"y",
    motherName: "z"

  }
}
const jsonData = JSON.stringify(person)
console.log(jsonData)

const planData = JSON.parse(jsonData)
console.log(planData)

//Fetch
// fetch("url")
//   .then(res =>res.json())
// .then(data=>console.log(''))

//key

const person1 ={
  name: "Nobita",
  age: 23,
  frineds:["sonia","Muku","Raier","priom", "Nafisa"],
  family:{
    fatherName:"y",
    motherName: "z"

  }
}
const keys = Object.keys(person1)
console.log(keys)

const values = Object.values(person1)
console.log(values)


const products = [
   {name: "redmi", brand:"xiaomi", price:"3000", color:"black"},
   {name: "samsung", brand:"sam", price:"5000", color:"white"},
   {name: "apple1", brand:"apple", price:"6000", color:"gold"},
   {name: "apple2", brand:"apple", price:"5000", color:"orange"},
]

const newData={
  name:'walton',
  brand:'walton',
  price:'3000',
  color:'gray'
}

const newArray =[...products, newData]
console.log(newArray)

const remnaingProducts =products.filter(p=>p.brand!=='xiaomi')
console.log(remnaingProducts)
const newArray2 = [...remnaingProducts, newData]
console.log(newArray2)







