/*
1.	Create an array called ages that contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.
*/

 let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/*
a.	Programmatically subtract the value of the first element in the array from the 
value in the last element of the array (do not use numbers to reference the last element, 
find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the 
console.
*/

console.log(ages[ages.length - 1] - ages[0]);

/*
b.	Add a new age to your array and repeat the step above to ensure it is dynamic 
(works for arrays of different lengths).
*/

ages.push(33);
console.log(ages[ages.length -1] - ages[0]);

/*
c.	Use a loop to iterate through the array and calculate the average age. Print the 
result to the console.
*/

//I found two ways to complete this task. I'm not sure if the first counts as a loop.
let averageAge = ages.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue
}) / ages.length;
console.log(averageAge);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
console.log(sum / ages.length);

/* 
Problem 2
Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
*/

let names = ['Sam', 'Tommy','Tim', 'Sally', 'Buck', 'Bob'];

/*
a.Use a loop to iterate through the array and calculate the average number 
of letters per name. Print the result to the console.
*/

sum = 0;
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length;
}
console.log(sum / names.length);

/*
b.	Use a loop to iterate through the array again and concatenate all the names together,
 separated by spaces, and print the result to the console.
 */
sum = '';
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i] + ' ';
}
console.log(sum);

// 3.How do you access the last element of any array?
// Type the array name, and in square brackets type the arrayName.length -1
let someArray = [];
someArray[someArray.length - 1]


// 4.How do you access the first element of any array?
//Type the array name, and in square brackets type 0 to access the first element
someArray[0]

/*
5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

/*
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all 
the elements in the array. Print the result to the console.
*/

sum = 0;
for (i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);

/*
7.	Write a function that takes two parameters, word and n, as arguments and returns
the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3,
I would expect the function to return ‘HelloHelloHello’).
*/


function repeat(word, n) {
    let words = '';
    for (let i = 0; i < n ; i++ ){
        words = words + word;
    }
    return words;
}
console.log(repeat("Peek-a-Boo ", 7));

/*
8.	Write a function that takes two parameters, firstName and lastName, and returns a
full name (the full name should be the first and the last name separated by a space).
*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName( 'Mark', 'Stearman'));


/*
9.	Write a function that takes an array of numbers and returns true if the sum of all 
the numbers in the array is greater than 100.
*/

function arraySum(array) {
    let sum = 0;
    for ( i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    if (sum > 100) {
        return true;
    }
}

console.log(arraySum([4,6,8,2,100]));

/*
10.	Write a function that takes an array of numbers and returns the average of all the 
elements in the array.
*/

function average(array) {
    let sum = 0;
    for ( i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
        return sum / array.length;
}

console.log(average([2,4,6,8]));


/*
11.	Write a function that takes two arrays of numbers and returns true if the average
of the elements in the first array is greater than the average of the elements in the 
second array.
*/

function compareArrays(a,b) {
    let sumA = 0;
    let sumB = 0;
    for (i = 0; i < a.length; i++) {
        sumA = sumA + a[i];
    }
    for (i = 0; i < b.length; i++) {
        sumB = sumB + b[i];
    }
    if ((sumA / a.length) > (sumB / b.length)) {
        return true;
    }        
}

console.log(compareArrays([2,3,100], [2,4,6]));

/*
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 
10.50.
*/

function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside > 75 && moneyInPocket > 10.50){
        return true;
    }
}

console.log(willBuyDrink(80, 12));


/*
13.	Create a function of your own that solves a problem. In comments, write what the 
function does and why you created it.
*/

// This function checks if a child's homework is done, and if their bedroom is clean, then grants access to minecraft if both are true. 
// This function prioritizes responsibilities; homework first, then clean up.
// I created this function because I get asked this question often and I wanted to automate the response. 

function minecraftAccess(homeworkDone, bedroomClean) {
    if ( homeworkDone) {
        if (bedroomClean) {
            return 'Yes, you may play minecraft.';
        } else {
            return 'Go clean your room!';
        }
    } else {
        return 'Go do your homework!';
    }
}

console.log(minecraftAccess(false, false));
console.log(minecraftAccess(true, false));
console.log(minecraftAccess(true, true));