//explore Local Storage and Session Storage with JSON

const handleAddToStorage=  ()=>{
  const name = document.getElementById("name").Value;
   const email = document.getElementById("email").Value;
  localStorage.setItem(email,name)
}