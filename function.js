function show(name,age,task) {
  task();
  console.log(name,age)

  
}
function hand(){
  console.log("Wash your hand:")
}
function dress() {
  console.log("wear your uniform:")
  
}
show("Nurul Absar" , 34 , dress)