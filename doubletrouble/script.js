let arr=["a", "b", "c", "d", "d"];
let newArr=[];


for(let i=0; i<arr.length; i++){
    if(arr[i]==arr[i++]){
newArr = arr.map((x) => x + x);
}
else{
    newArr = arr.map((x) => x)}
}
console.log(newArr);