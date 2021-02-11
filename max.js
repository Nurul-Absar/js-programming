var nam=[1,2,3,4,5,6,5,56,76,1,2,8,3,5,6]
var uniqe_value=[]
for(i=0;i<nam.length;i++){
  element=nam[i]
  index=uniqe_value.indexOf(element)
  if(index==-1)
  {
    uniqe_value.push(nam[i])
  }
}
console.log(uniqe_value)