//1-  Declare a variable called username.

var username;

// Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Kishwar Jabeen";

// 3- Write a script to:
//	3.1 declare a JS variable, titled message

var message; 

//  3.2 assign “Hello World” to the variable message

message = "Hello World";

// 3. 3 display the message in alert box

alert(message);

// 4- Write a script to save student’s bio data in JS variables and show the data in alert boxes.


var getName, getFname, getEdu;
getName = prompt("write students name");

getFname = prompt("write your Father name");
getEdu = prompt("Your Education");

alert("your name is:" + " " + getName + " " + "Father name: " + " " + getFname + " " + "education"+ " "+ getEdu);

// 5- Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation) Example
// My Email Address is majid@gmail.com

var email = "kishwerjabeen90@gmail.com";
alert("My Email address is "+ email);

// 6 - Declare a variable called book & give it the value “Best way to learn JavaScript”. Display the following message in an alert box Exmaple:
// I am trying to learn from the book Best way to learn JavaScript

var book = "Best way to learn JavaScript";
alert("I am trying to learn from the  book  " + book);

// 7 - Write a script to display following message on your web page: (Hint : Use line break) Example:
// Welcome to learn 
// JavaScript

 document.write("Welcome to learn" ); document.write(" JavaScript");

// 8 -   Write a script to display this in browser through JS Example:
// Yay! I can write HTML content in the browser through Javascript

document.write( "<br>" + "    Yay! I can Write HTML content in the browser through JavaScript");

// 9 + 10 - A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// Visitor’s name
// Quantity i.e. how many products a visitor wants to
// Product title
// Show the following message in your browser Example:
// John Doe ordered 5 T-shirt(s) on XYZ Clothing store.

document.write("</br>" + "<h1>" + " Welcome to xyzClothing store " +"</h1>" + "</br>");

var visitorName, Quantity, proName, 
visitorName = prompt("What's you name", "Kishwar Jabeen");
proName = prompt("products title");
Quantity = prompt("Enter total Quantity");

document.write(visitorName + " ordered " + Quantity + " " + proName + " on xyzClothing store");

//11-  Declare 3 variables in one statement
var a, b, c;

// 12 - Declare 5 legal & 5 illegal variable names.
var a; //legal
var a2;  //legal
var _abc; //legal
var abVd; //legal
var ab_v3; //legal

// Illegal var 2a; 
// Illegal var @ab; 
// Illegal var A@d.; 
// Illegal var {sa};

// 12- Do the following using JS Mathematic Expressions
// a. Declare a variable.

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

// c. Initialize the variable with some number.

// d. Show the value of variable in your browser like “Initial value: 3”.

// e. Increment the variable.

// f. Show the value of variable in your browser like “Value after increment is: 4”.
// g. Add 7 to the variable.

// h. Show the value of variable in your browser like “Value after addition is: 11”.

// i. Decrement the variable.

// j. Show the value of variable in your browser like “Value after decrement is: 10”.

// k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1”

var a;
document.write( "</br>" +  " value after variable declaration is: " + a);
a = 3;
document.write( "</br>" +  " Initial value: " + a);
a++;
document.write( "</br>" +  " value after increment " + a);
a = a + 7;
document.write( "</br>" +  " value after addition is :  " + a);
a--;
document.write( "</br>" +  " value after decrement:  " + a);
a = a % 3;
document.write( "</br>" +  " remainder after dividing the variable value by 3. Output:  " + a);


// 13-  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example:
// Total Cost to buy 5 tickets to a movie is 3000 PKR

var ticCost, buy, total;
ticCost = prompt(" Enter ticket price ");
buy = prompt("how many ticket you want?");

total = ticCost * buy;
document.write("</br>" + "Total cost to buy " + buy + " tic to movie is " + total + "PKR");

// You have to render Table in multi types


document

