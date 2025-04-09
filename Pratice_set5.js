/*
console.log("har\"".length)
let name='Riya'
console.log(name.startsWith('R'));
console.log(name.endsWith('e'));
console.log(name.includes('i'));
console.log(name.toLowerCase());

let str = "please give Rs 10000";
console.log(str.slice(15));
console.log(str.replace("please", "plz"));

const arr = [1,2,3];  //inserting number into array
arr.push(0)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(4)
console.log(arr)

arr.fill()
console.log(arr)

const arr2=[];   // adding numbers into array till 0 entered
for(let i=5; i>=0; i--){
    if(i!=0){
        arr.push(i);
    } 
    else{
        break;
}
}
console.log(arr)

const arr =[70, 63, 82, 30, 7, 53, 40, 19, 84, 90];   //divisible by 10
const arr_1=[]
for (let i in arr){
    if(arr[Number(i)]%10===0){
        arr_1.push(arr[Number(i)])
    } 
    else{
        continue;
}   
}
console.log(arr_1)

const arr =[70, 63, 82, 30, 7, 53, 40, 19, 84, 90];   //divisible by 10(alternative way)
console.log(arr.filter(num => num%10 === 0));
*/

const arr=[1,2,3,4,5]
for(let i in arr){
    arr[i]=arr[i]*arr[i];
}
console.log(arr)