let num = [70, 63, 82, 30, 7, 53, 40, 19, 84, 90]; 

/*
// for-each loop (used to perform any kind of operation inside the array)

num.forEach((element) => {
    num[num.indexOf(element)]= element * element;
})

console.log(num);


// Array from loop

let str ="Riya";
console.log(Array.from(str));

//map (used to create a new array after performing the opertaion on the values of the array)

let a =num.map((value, index) => {
    return [value, index];
})

console.log(a);

// filter method

let a= num.filter((i) => {
    return i>10;
})

console.log(a);
*/

//reduce method

const add = (a,b)=>{
    return a+b;
}

console.log(num.reduce(add));