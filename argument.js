function addNumber(num1,num2) {
  var sum=0
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum=sum+num
    
    
  }
  return sum;
  
}
console.log(addNumber(4,6,5,6,7,3))