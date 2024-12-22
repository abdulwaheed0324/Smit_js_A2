// //VARIABLE NAMES: LEGAL & ILLEGAL

// //Task 1  1. Declare 3 variables in one statement.

// let x = 2, y = 3, z = 4;

// //Task 2 2. Declare 5 legal & 5 illegal variable names.

// //LEGAL VARIABLES
// let $number = 10;
// let _underscore_variable = 20; 
// let number = 30; 
// let myVariable2024 = 40; 
// let isValid = true;

// //ILLEGAL VARIABLES
// let 1variable = 40; 
// let @specialvariable = 50;
// let class = "Reserve variable"
// let user-name = "hyphen is not allowed"
// let user name = "space not allowed"


// // 3. Display this in your browser
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable.<br>");
// document.write("Variables must begin with a letter, $, or _. For example: $name, _name, or name.<br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS reserved keywords.");

// //1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser. 


// let number1 = 3;  
// let number2 = 5; 

// let result = number1 + number2;


// document.write("The sum of " + number1 + " and " + number2 + " is " + result + ".");

// // 2. Repeat task1 for subtraction, multiplication, division & modulus.

// let number11 = 3;  
// let number22= 5; 

// let subtraction = number1 - number2;
// let multiplication = number1 * number2;
// let division = number1 / number2;
// let modulus = number1 % number2;

// document.write("The subtraction of " + number1 + " and " + number2 + " is " + subtraction + ".<br>");
// document.write("The multiplication of " + number1 + " and " + number2 + " is " + multiplication + ".<br>");
// document.write("The division of " + number1 + " by " + number2 + " is " + division + ".<br>");
// document.write("The modulus of " + number1 + " and " + number2 + " is " + modulus + ".<br>");


// // 3. Do the following using JS Mathematic Expressions 


// let number;

// document.write("Value after variable declaration is: " + number + "<br>");

// number = 5;
// document.write("Initial value: " + number + "<br>");

// number++;
// document.write("Value after increment is: " + number + "<br>");

// number += 7;
// document.write("Value after addition is: " + number + "<br>");

// number--;
// document.write("Value after decrement is: " + number + "<br>");

// let remainder = number % 3;
// document.write("The remainder is: " + remainder);


// // 4. Cost of one movie ticket is 600 PKR. Write a script to  store 
// // ticket price in a variable & calculate the cost of buying 5  tickets 
// // to a movie. Example output:


// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;

// document.write("The cost to buy 5 tickets to a movie is  " + totalCost +"PKR.");


// //5. Write a script to display multiplication table of any  number in your browser. E.g
// let number = 4;


// document.write("<h1> Table of " + number + "</h1><br>");
// for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     document.write(number + " x " + i + " = " + result + "<br>");
// }


// //6. The Temperature Converter: It’s hot out! Let’s make a  converter based on the steps here

// let celsius = 25; 

// let fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F.<br>");

// let fahrenheitTemp = 70;

// let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C.");




// // 7. Write a program to implement checkout process of a  shopping cart system for an e-commerce website. Store  the following in variables


// let priceOfItem1 = 650; 

// let priceOfItem2 = 100;

// let quantityOfItem1 = 3; 

// let quantityOfItem2 = 7; 

// let shippingCharges = 100; 

// let totalPriceItem1 = priceOfItem1 * quantityOfItem1;
// let totalPriceItem2 = priceOfItem2 * quantityOfItem2;
// let totalCost = totalPriceItem1 + totalPriceItem2 + shippingCharges;

// document.write("<h2>Shopping Cart</h2>");
// document.write("price of item 1 is " + totalPriceItem1 + " PKR<br>");
// document.write("The quantity of item 1 is  " + quantityOfItem1 + " <br>");
// document.write("The price of item 2 is  " + priceOfItem2+ "PKR<br>");
// document.write("The Quantity of item 2 is  " + quantityOfItem2+ "<br>");
// document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
// document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");

// // 8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in  your browser


// let totalMarks = 980; 
// let marksObtained = 804; 

// let percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");


// // // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// // // script to convert the total currency to Pakistani Rupees.
// // // Perform all calculations in a single expression.
// // // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// // // and 1 Saudi Riyal = 28 Pakistani Rupee)

// let us_dollar = 104.80
// let saudiRiyal = 28

// document.write("<h1>Currency in PKR</h1>");
//  document.write("This currency in PKR:" +( total_currency =(us_dollar * 10) + (saudiRiyal * 25)))

// // 10. Write a program to initialize a variable with some
// // number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expressionx


// let number = 10;

// let result = ((number + 5) * 10) / 2;

// document.write("The result of the arithmetic operations is: " + result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// // Output them to the screen like so: “They are either NN or NN
// // years old”.


// Task 12


// // a. Store the radius of the circle
// let radius = 20; // Updated radius value

// // b. Calculate the circumference
// let pi = 3.142; // Define the value of π
// let circumference = 2 * pi * radius;

// // c. Calculate the area
// let area = pi * radius * radius;

// // Display the results using document.write
// document.write(`<p>Radius of the circle: ${radius}</p>`);
// document.write(`<p>The circumference is ${circumference.toFixed(2)}</p>`); // Round to 2 decimal places
// document.write(`<p>The area is ${area.toFixed(2)}</p>`); // Round to 2 decimal places

// Task 13

// let favoriteSnack = "chocolate chip cookies";
// let currentAge = 15;
// let maxAge = 65;
// let amountPerDay = 3;

// let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

// document.write('Favourite Snack: ', favoriteSnack, "<br>"); 
// document.write('Current Age: ', currentAge, "<br>");
// document.write('Estimated Maximum Age: ', maxAge, "<br>");
// document.write('Amount of Snacks Per Day: ', amountPerDay, "<br><br>");

// document.write(`You will need <strong>${totalSnacks} ${favoriteSnack}</strong> to last you until the ripe old age of <strong>${maxAge}</strong>.`);


// Chapter 3


// // Task 3
// let userName = prompt("Please enter your name: ");
// document.write("Hello, " + userName + "! Welcome to our website.");

// // Task 4
// let number = prompt("Enter a number to display its multiplication table: ");

// if (number === null || number === "") {
//   number = 5;
// }

// document.write("<h2>Multiplication Table of " + number + ":</h2>");

// for (let i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// // Task 5 
// let subject1 = prompt("Enter the name of the first subject: ");
// let subject2 = prompt("Enter the name of the second subject: ");
// let subject3 = prompt("Enter the name of the third subject: ");

// let totalMarksPerSubject = 100;

// let marks1 = prompt("Enter obtained marks for " + subject1 + ": ");
// let marks2 = prompt("Enter obtained marks for " + subject2 + ": ");
// let marks3 = prompt("Enter obtained marks for " + subject3 + ": ");

// let totalMarks = totalMarksPerSubject * 3;
// let obtainedMarks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
// let percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<table border='1' style='border-collapse: collapse; width: 50%;'>");
// document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + marks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + marks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + marks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + obtainedMarks + "</strong></td><td><strong>" + totalMarks + "</strong></td></tr>");
// document.write("<tr><td><strong>Percentage</strong></td><td colspan='2'><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");
