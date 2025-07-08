console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++)
    if (i % 15 == 0){
        console.log("FIZZBUZZ")
    }
    else if (i % 3 == 0){
        console.log("FIZZ")
    }    
    else if (i % 5 == 0){
        console.log("BUZZ")
    };

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let n = 1;
do {
    if (n % 2 != 0){
        console.log(n)
    }
    n++;
} while (n <= 100);

let m = 1;
do {
    if (m % 15 == 0){
        console.log("FIZZBUZZ")
    }
    else if (m % 3 == 0){
        console.log("FIZZ")
    }    
    else if (m % 5 == 0){
        console.log("BUZZ")
    };
    m++;
} while (m <= 100); 

// Exercise 4
console.log("EXERCISE 4:\n==========\n");


let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let num = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for (let i = 0; i <= num; i++){
    if (i == value){
        console.log("Found Value!")
        found = true;
        break;
    };
} 

if (!found) {
    console.log("Did not find value");
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let r = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= r; i++)
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ")
    }
    else if (i % fizzDivisor == 0){
        console.log("FIZZ")
    }    
    else if (i % buzzDivisor == 0){
        console.log("BUZZ")
    };