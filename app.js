"use strict";
let message = "hello world";
console.log(message);
// Question 2
let myName = "Sajjad";
console.log(`Hello ${myName}, would you like to learn some Python today?`);
// Question 3
// Lowercase
let lowercaseName = myName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);
// Uppercase
let uppercaseName = myName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);
// Titlecase
let titlecaseName = myName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
console.log(`Titlecase: ${titlecaseName}`);
// Question 4:
let quote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
let author = "Winston Churchill";
console.log(`"${quote}" - ${author}`);
// Question 5:
let secondQuote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
let famous_person = "Winston Churchill";
let secondMessage = `"${secondQuote}" - ${famous_person}`;
console.log(secondMessage);
//Question 6:
let thirdName = "\t\n\t\t\tJohn Doe\t\t\t\n\t";
console.log("Original name (with whitespace):", thirdName);
let trimmedName = thirdName.trim();
console.log("Trimmed name (without whitespace):", trimmedName);
// Question 7:
// Addition
let additionResult = 4 + 4;
console.log(`Addition: ${additionResult}`);
// Subtraction
let subtractionResult = 12 - 4;
console.log(`Subtraction: ${subtractionResult}`);
// Multiplication
let multiplicationResult = 2 * 4;
console.log(`Multiplication: ${multiplicationResult}`);
// Division
let divisionResult = 32 / 4;
console.log(`Division: ${divisionResult}`);
//Question 8:
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Question 10:
let favoriteNumber = 7;
let favouriteMessage = `My favorite number is ${favoriteNumber}.`;
console.log(favouriteMessage);
// Question 11:
//already performing with each question comment part.
// Question 12:
let myNamesList = ["Ali", "Basit", "Kareem", "Dauood"];
for (let i = 0; i < myNamesList.length; i++) {
    console.log(myNamesList[i]);
}
// Question 13:
for (let i = 0; i < myNamesList.length; i++) {
    console.log(`Hi ${myNamesList[i]}, I hope you're having a great day!`);
}
// Question 14:
let favoriteTransportation = ["car", "motorcycle", "bicycle", "train"];
for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}
// Question 15:
let dinnerGuests = ["Ali", "Zain", "Sahab"];
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored if you would join me for dinner.`);
}
// Question 16:
// Original guest list
let dinnerGuests1 = ["Albert Einstein", "Jane Austen", "Steve Jobs"];
// New guest
let newGuest = "Marie Curie";
// Remove the guest who can't make it
dinnerGuests1.pop();
// Add the new guest
dinnerGuests1.push(newGuest);
// Print a message to each person, inviting them to dinner
for (let i = 0; i < dinnerGuests1.length; i++) {
    console.log(`Dear ${dinnerGuests1[i]}, I would be honored if you would join me for dinner.`);
}
