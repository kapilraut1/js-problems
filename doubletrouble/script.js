let arr = ["a", "b", "d", "d", "e"];
let newArr = [];
let random=Math.random();
 
for(let i=0; i<arr.length; i++){
  if(arr[i+1]!==arr[i]){
    newArr.push(arr[i]+ arr[i])
  }
  else{
    //newArr.push(arr[i]+arr[i]);
    newArr.push(arr[i+1]);
  }
}
//console.log(random);
console.log(newArr);