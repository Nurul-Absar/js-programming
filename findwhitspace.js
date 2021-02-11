var str="But  with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties."
var count=0;
for(i=0;i<str.length;i++)
{
 
  
  if(str[i]==" " && str[i-1]!=" " ){
    count++;
  }

}
console.log(count)