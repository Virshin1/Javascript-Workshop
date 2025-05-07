/*
function convert(x){
    let change=(x*9/5)+32;
    console.log("Convertion = "+change)
}

convert(2)

let str="This is a string";
let str_=" and this is also a string"
console.log('"'+str+'"')
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.length)
console.log(str.charCodeAt(1))
console.log(str.charAt(0))
console.log(str.slice(1,6))
console.log(str.replace('h','t'))
console.log(str.search("This"))
console.log(str.concat(str_))

function checkString(){
    let s1=prompt("Enter string 1");
    let s2=prompt("Enter string 2");

    if(s1==s2){
        return true;
    }
    else{
        return false;
    }
}

checkString()

let str1=prompt("Enter string")
let len = str1.length
console.log(str1.substring(1,len))


const arr = ["Hello","World","hello","world","virshin","slice","Virshin"]
let st=prompt("Enter string")
function find(arr,st){
    for(let m of arr){
        if(st===m){
            console.log("String at: "+arr.indexOf(m))
        }
    }
}
console.log(find(arr,st))


let str1="5"

let padded = str1.padStart(5, "0")
console.log(padded)

//Javascript ignores all extra parameters that are passed to a function. It also runs without giving all required parameters

let a = () => console.log("Hello") //arrow function
a()

function Numbers1(...num1){ //n number of arguments
    console.log(num1)
}
Numbers1(1,2,3,4,5,6,7,8)

function Numbers2(num1,num2,num3,num4){ //normal function
    console.log(num1)
}
Numbers2(12,8)

function negtive(x){
    return (x<=0) ? x : -x
    
}
console.log(negtive(-2))

for(let i=arr.length-1;i>=0;i--){
    a.push(arr[i])
}
console.log(a);

let fun=(x,y,z) => {
    if ( x%2 == 0) {
        console.log(x);
        
    }
}
arr.filter(fun)

const arr=[1,2,3]
const a=[1,2,3]

for(let i=0;i<arr.length;i++){
    a.push(arr[i])
}
console.log(a);

let arr = [10,47,56,7,8,2,3,4,5,6,7,8,9,9,7,6,6,6,6,5,55,44,34]
function great(num1,num2,arr){
    let a=[]
    for(let x of arr){
        if(x>num1 && x<num2){
            a.push(x)
        }
    }
    console.log(a);
}

great(5,50)*/
