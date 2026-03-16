//! JavaScript comparison:

//? We mainly use these symbols for comparison:

/*
==  : Equal to (compares values, ignores data types)
=== : Strict equal to (compares values and data types)
!=  : Not equal to (compares values, ignores data types)
!== : Not strict equal to (compares values and data types)
>   : Greater than
<   : Less than
>=  : Greater than or equal to
<=  : Less than or equal to
*/

//? Example:

let a = 10;
let b = "10";

console.log(a == b); // true (values are equal, data types are ignored)
console.log(a === b); // false (values are equal, but data types are different)
console.log(a != b); // false (values are equal, data types are ignored)
console.log(a !== b); // true (values are equal, but data types are different)
console.log(a > b); // false (10 is not greater than "10")
console.log(a < b); // false (10 is not less than "10")
console.log(a >= b); // true (10 is equal to "10" when data types are ignored)
console.log(a <= b); // true (10 is equal to "10" when data types are ignored)

//! Reale life example: Let's say you're building a website that only allows users aged 18 and over. Here we'll use comparison.

let userAge = 20;
let minimumAge = 18;

if (userAge >= minimumAge) {
  console.log("Welcome! You can use the website.");
} else {
  console.log("Sorry, you are under 18 years old. You cannot use the website.");
}

//! Discount copon check: When someone gives a coupon code on an e-commerce site, it has to match exactly. It is safe to use === here.

let enteredCoupon = "SAVE10";
let validCoupon = "SAVE10";

if (enteredCoupon === validCoupon) {
  console.log(
    "Congratulations! Your coupon code is valid. You get a discount.",
  );
} else {
  console.log("The coupon code is not valid.");
}

//! basic comparison practice:
//? 
let meEatSandwich = 7;
let myFriendEatSandwich = 5;

if (meEatSandwich > myFriendEatSandwich) {
  console.log("I eat more than my friend.");
} else {
  console.log("My friend eats more than me.");
}

let myClassStudents = 45;
let otherClassStudents = 50;

if (myClassStudents < otherClassStudents) {
  console.log("My class has fewer students than the other class.");
} else {
  console.log("My class has more students than the other class.");
}

let myExamMarks = 85;
let myFriendExamMarks = 85;

if (myExamMarks >= myFriendExamMarks) {
  console.log("I scored the same or higher than my friend.");
}   else {
  console.log("My friend scored higher than me.");
}

let myTargetAmount = 100;
let myCurrentAmount = 100;

if (myCurrentAmount <= myTargetAmount) {
  console.log("I have met my target amount.");
} else {
  console.log("I have not met my target amount yet.");
}