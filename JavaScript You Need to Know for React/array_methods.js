const products = [
   {name: "redmi", brand:"xiomi", price:"3000", color:"black"},
   {name: "samsung", brand:"sam", price:"5000", color:"white"},
   {name: "apple1", brand:"apple", price:"6000", color:"gold"},
   {name: "apple2", brand:"apple", price:"5000", color:"orange"},
]
const result = products.map(product=>product.price)
console.log(result)
const result1 = products.map(product1=>product1.brand)
console.log(result1)
   
products.forEach(product3=>console.log(product3)) 
const res = products.filter(produc=>produc.brand==="apple")
console.log(res)

const  r = products.filter(producc=>producc.price>=5000) 
console.log(r)
const result3 = products.find(product3=>product3.name==="apple1")
console.log(result3)
