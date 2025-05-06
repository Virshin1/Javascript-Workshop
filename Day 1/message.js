function msg(){
    alert("Welcome to JS workshop");
}

//alert("Hello from external script")

let name = "Raj koli"
let age = 30;


function msg() {
    alert("Hello from external script!");
}
let y = 10e40;
let z = "hello world"
let isTrue = true;
let arr = [1,2,3,4,5];
let obj = {name: "john",age:30};
let func = function(){return "yessss"}
let nullValue = null;
let symb = Symbol("x")
let BigValue = BigInt("1234567890123456789012345678901234567890")



console.log(func())
console.log(z)
console.log(isTrue)
console.log(arr)
console.log(obj)
console.log(nullValue)
console.log(symb)
console.log(y)

let x_ = 5,y_ = '5';
console.log(x_ === y_);
console.log(x_ == y_);
console.log(x_ !=y_)

/* 
let num = prompt("Enter your age");
if(num == 18){
    console.log("You are Eligible for voting")
}
else{
    console.log("You are not Eligible for voting")
}

console.log(Date.getDate())
*/

let angle = 40;
console.log(angle+angle);

//let a = prompt();

var x;

function CheckType(x){
    console.log(typeof(x));
}
CheckType(12)

let x1;

function Convert(x1){
    
}

let username="Virshin"
let password='1234'

/*
function CheckPassword(user, pass){
    if(pass==password && user==username){
        alert("User is allowed")
    }
    else{
        alert("Incorret password or username")
    }
}

CheckPassword(prompt("Enter username"),prompt("Enter password"))
*/

function table(x){
    for(let i=1;i<=10;i++){
        let multi=i*x
        console.log(x+"*"+i+"="+multi)
    }
}

//table(prompt("Enter number for table"))
/*
let day= prompt("Enter the number between 1-7:")
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Enter the number between 1-7")
 
}
*/


/*
let user = prompt("Enter your username");
let pass = prompt("Enter your password");
let set={};
set.name = "Virshin";
set.password = 1234;

for (sets in set){
    if (user == set.name && pass == set.password){
        console.log("Login successful");
    }
    else{
        console.log("Login failed");
    }
}
*/
function prime(x){
    let check=0
    for(let i=2;i<x/2;i++){
        if(x%i==0){
            check=1;
        }
    }
    if(check==1){
        console.log("Number is not prime")
    }
    else{
        console.log("Number is prime")
    }
}



prime(5)