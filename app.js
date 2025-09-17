// STRING METHODS STRING METHODS

// Continue 6)

// 7)

var city = "Hyderabad";
document.write(city);

var replacecity = city.replace("Hyder", "Islam")

document.write(replacecity);

// 8)

var message = "Ali and Sami are best friends. They play cricket and football together"

document.write(message.replaceAll("and" , "&"))

// 9)

var number = 472 ;
document.write(number,"<br>")
document.write(typeof number.toString())

var string = "472" ;
document.write("<br>",string,"<br>")
document.write(typeof +string)

// 10)

var input = prompt("Enter Your Name")
document.write(input,"<br>")
document.write(input.toUpperCase())

// 11)

var input = prompt("Enter Your Skill");
var firstLetter = input.slice(0, 1).toLocaleUpperCase();
var secondLetter = input.slice(1).toLocaleLowerCase();
var title = firstLetter + secondLetter;
document.write(input, "<br>");
document.write(title);

// 12)

var num = 35.36;
document.write("Number:",num, "<br>");
var copy1 = num.toString().slice(0, 2);
var copy2 = num.toString().slice(3,);
var replace = copy1 + copy2;
document.write("Result:",replace);

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

