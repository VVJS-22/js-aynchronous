// function greet(name,callback) {
//     console.log("hello "+name);
    
//     if (count == 5) {
//         clearInterval(interval);
//     }
//     count++;
//     callback();
// }

// let count = 5;

// function greet(name="jai",age) {
//     console.log("hello "+name+age);
//     count--;
//     if(!count) {
//         clearInterval(interval);
//     }
        
// }

// const interval = setInterval(greet,2000,"anu",18);




const alpha = ['a','b','c','d'];

alpha.forEach((letter) => {
    console.log(letter);
})


let index = 0;
function print() {
    // console.log(alpha.length);
    if(index < 4) {
    console.log(alpha[index]);
    index++;
    print()
    }
}

print();

function present (name,callback) {
    console.log("my present is a "+name);
    callback();
}

present('toy',callMe);


function callMe() {
    console.log("presented");
}




// let count = 0;
// // greet();
// setTimeout(greet, 4000,'jai',callMe);
// console.log("hi");

// const interval = setInterval(greet, 2000,'tony',callMe);

// function callMe() {
//     console.log('This is a callback function');
// }

// greet('pooja',callMe);




// function mul (x,y) {
//     console.log(x*y);
// }

const mul = () => {
    console.log(2*3);
} 

mul();


// mul (2,3);

// mul = (x,y) => {
//     console.log(x*y);
// }

// mul(2,3)

array = [1,2,3,4,5];

array.forEach((element)=> {
    console.log(element);
})

let age = 67;

// if(age > 18) {
//     console.log('adult');
// }else {
//     console.log("child");
// }

const check = () => {
    age < 5 ? console.log("baby") : console.log('child');
}

age > 18 ? console.log("adult") : check();

x = 5;
console.log(x);
x = 3;

console.log(x);

// age < 18 ? console.log('child'):console.log('adult');

function show(a,b, ...extra){
    console.log(a);
    console.log(b);
    console.log(extra)
}

show(1,2,3,4,5,6,7,8);

const arr1 = [1,2,3];
let arr2 = [4,5,6,7,8];

console.log(arr1);
console.log(arr2);

arr2 =new Set( [...arr1,3,4,5,6,7,8]);
console.log(arr2);

// console.log(new Set(arr2));