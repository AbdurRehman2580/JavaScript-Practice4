// STRING METHODS STRING METHODS

// Continue 6)

var firstName = "Abdur";
var SecondName = "Rehman";

var Result = firstName.concat(" ", SecondName);
console.log(Result);

// 7)

var city = "Hyderabad";
document.write(city);

var replacecity = city.replace("Hyder", "Islam");

document.write(replacecity);

// 8)

var message =
  "Ali and Sami are best friends. They play cricket and football together";

document.write(message.replaceAll("and", "&"));

// 9)

var number = 472;
document.write(number, "<br>");
document.write(typeof number.toString());

var string = "472";
document.write("<br>", string, "<br>");
document.write(typeof +string);

// 10)

var input = prompt("Enter Your Name");
document.write(input, "<br>");
document.write(input.toUpperCase());

// 11)

var input = prompt("Enter Your Skill");
var firstLetter = input.slice(0, 1).toLocaleUpperCase();
var secondLetter = input.slice(1).toLocaleLowerCase();
var title = firstLetter + secondLetter;
document.write(input, "<br>");
document.write(title);

// 12)

var num = 35.36;
document.write("Number:", num, "<br>");
var copy1 = num.toString().slice(0, 2);
var copy2 = num.toString().slice(3);
var replace = copy1 + copy2;
document.write("Result:", replace);

// 13)

var username = prompt("Enter Your User Name");

if (
  username.includes("!") ||
  username.includes(",") ||
  username.includes(".") ||
  username.includes("@")
) {
  alert("Please Enter a Valid User Name");
} else {
  alert("Accept", username);
}

// 14)

var item = prompt("Enter Your Bakery Item");

var a = 0;

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var i = 0; i <= bakery.length; i++) {
  if (item === bakery[i]) {
    a = 1;
    console.log(item, " is available at index ", i, "in our bakery");
  }
}
if (a === 0) {
  console.log("We are sorry.", item, " is not available in our bakery");
}

// 15)

var randomValues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

var randomValLen = randomValues.length;

var passwordGenerator = "";

for (var i = 0; i < 6; i++) {
  var randomNumbers = Math.floor(Math.random() * randomValLen);

  passwordGenerator = passwordGenerator + randomValues[randomNumbers];
}

console.log(passwordGenerator);

// 16)

var university = "University of Karachi";

var universitylen = university.length;

var column = "";

for (var i = 0; i < universitylen; i++) {
  column = university[i];
  document.write(column, "<br>");
}

// 17)

var input = "Pakistan";

document.write("User Input:", input, "<br>");
document.write("Last Character Of Input:", input.charAt("7"));

// 18)

var str = "The quick brown fox jumps over the lazy dog";
var strlower = str.toLocaleLowerCase().split(" ");
var count = 0;

for (var i = 0; i < strlower.length; i++) {
  if (strlower[i] === "the") {
    count++;
  }
}
console.log("Number of 'the':", count);

// Math Methods

// 1)

var num = 3.45214;

document.write("number: ", num);
document.write("<br> round off value: ", Math.round(num));
document.write("<br> floor value: ", Math.floor(num));
document.write("<br> ceil value: ", Math.ceil(num));

// 2)

var num = -2.673;

document.write("number: ", num);
document.write("<br> round off value: ", Math.round(num));
document.write("<br> floor value: ", Math.floor(num));
document.write("<br> ceil value: ", Math.ceil(num));

// 3)

var a = -4;

var absvalue = Math.abs(a);

document.write("The absolute value of ", a, " is ", absvalue);

// 4)

var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 4) + 1;

document.write("random dice value: ", dice1);
document.write("<br>random dice value: ", dice2);

// 5)

var toss = Math.floor(Math.random() * 2) + 1;
document.write(toss, "<br>");

if (toss == 2) {
  document.write("random coin value: Heads");
} else {
  document.write("random coin value: Tails");
}

// 6)

var random = Math.floor(Math.random() * 100);
document.write("random number between 1 and 100: ", random);

// 7)

var user = parseFloat(prompt("Enter Your weight"));
document.write("The weight of user is ", user, " Kilograms");

// 8)

var secret = Math.floor(Math.random() * 10) + 1;

var userNum = +prompt("Enter Your Secret Number And Win");
console.log(secret);

if (userNum === secret) {
  alert("Congrate");
} else {
  alert("Try again!");
}
