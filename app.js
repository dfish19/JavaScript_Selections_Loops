console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0)
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1 ; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    if(i % 3 == 0){
        console.log("FIZZ");
    }
    else if(i % 5 == 0){

    console.log("BUZZ");
    }
}

// //Exercise 3
console.log("EXERCISE 3:\n==========\n")
//  let i =1;

while( i <= 100){
    if(i % 2 != 0)
    console.log(i);
}

while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0){
        console.log("FIZZ");
    }
    else if(i % 5 == 0){

    console.log("BUZZ");
    }
    else{
        console.log(i);
    }
}

//EXERCISE 4
console.log("EXERCISE 4:\n==========\n")
let value = Math.round((Math.random() * 500));
let a = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 1; i <= a; i++){
    if(i == value){
        console.log("Found value")
        break;
    }
    else{
    console.log("Did not find value");
    }
}

//EXERCISE 5
console.log("EXERCISE 5:\n==========\n")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start ; i <= n; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    if(i % 3 == 0){
        console.log("fizzDivisor");
    }
    else if(i % 5 == 0){

    console.log("buzzDivisor");
    }
}