//chapter 6 TO 8
//QUESTION 1
document.body.innerHTML += (`<br/><br/> <b/> RESULT: <br/><br/>`)

var a = 10;
document.body.innerHTML += (`The value of a is: ${a}<br/> .........................................<br/><br/>`)

++a;
document.body.innerHTML += (`The value of ++a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

++a;
document.body.innerHTML += (`The value of ++a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

--a;
document.body.innerHTML+= (`The value of --a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

a--;
document.body.innerHTML+= (`The value of a-- is: 11 <br/>Now the value of a is: ${a}<br/><hr>`)




//QUESTION 2
document.body.innerHTML += (`<br/><br/><b/>INCREEMENT & DECREEMENT: <br/>`)
var a = 2,b = 1;
var result = --a - --b + ++b + b--;
document.body.innerHTML +=`<br/><br/> a is 1 <br/> b is 2 <br/> result is ${result}<br/><hr>`;




//QUESTION 3
console.log( `<br/><br/>  Greetings Program  <br/><br/><hr>`);
var userName = prompt(`Enter your name:`)
alert(`Hello, ${userName}! How you doing`);



//QUESTION 5
document.body.innerHTML += `<br/><br/><b>Multiplication Table</b><br/><br/>`;
var num = prompt(`Enter a number (default is 5):`, 5) || 5; // Use default if canceled
if (num && !isNaN(num)) {
    num = Number(num); // Convert input to a number
    for (let i = 1; i <= 10; i++) {
        document.body.innerHTML += `${num} * ${i} = ${num * i}<br/>`;
    }
} else {
    alert(`Invalid input. Please enter a number.`);
}



//CHAPRER 9 TO 11
//QUESTION 1
let city = prompt("Enter a city name:");
if (city === "karachi") {
  alert("Welcome to city of lights ");
} else {
  alert("Wellcome to your city ");
}



//QUESTION2
let gender = prompt("Enter your gender:");
if (gender === "male") {
  alert("Good Morning Sir ");
} else {
  alert("Good Morning Ma'am ");
}



//QUESTION 3
let signalColor = prompt("Enter the color of traffic signal");
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to Move");
} else if (signalColor === "green") {
    alert("Move Now");
} else {
    alert("Invalid color. Please enter red, yellow, or green.");
}


//QUESTION 4  
let fuel = prompt("Enter the remaining fuel in your car (in litres)");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("Fuel is sufficient");
}



//QUESTION 5
var a = 4;
if (++a === 5); {
    alert("given condition for variable A is true ");
}

var b = 82;
if (b++ === 83); {
    console.log("given condition for variable B is true ");
}

var c = 12;
if (c++ === 13); {
    console.log("condition 1 is true ");
}

if (c === 13); {
    alert("condition 2 is true ");
}

if (++c < 14); {
    console.log("condition 3 is true ");
}

if (c === 14); {
    alert("condition 4 is true ");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals ");
}
if (true); {
    alert("True");
}

if (false); {
    console.log("False ");
}

// f. if("car" < "cat")
if ("cat" < "car") {
    alert("cat is smaller than car ");
}



//QUESTION 7
let game = prompt("Guess the secret number between 1-10");

if(game == "8"){
    alert("Bingo! Correct answer");
} else{
    alert("Close enough to the correct answer");
};


//QUESTION 8
let check = prompt("Enter a number that is divisible by 3");
    if (check % 3 === 0) {
        alert("hurry1 this number is divisible by 3");
    } else {
        alert("Opps! Ihis is not divisible buy 3");
    }



//QUESTION 9
let oddEven = prompt("Enter number Then i will tell that it is even or odd number");
    if (oddEven % 2 === 0) {
        alert("It is a even number");
    } else {
        alert("It is a odd number");
    }




//QUESTION 10
let temperature = prompt("Enter temperature in Celsius:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("UFF! The weather today is freezing.");
}



//QUESTION 11
let number1 = +prompt("Enter first number");
let operator = prompt("select a operator");
let number2 = +prompt("Enter second number");

if(operator === "+"){
    alert(number1 + number2)
}
else if(operator ==="-"){
    alert(number1 - number2);
}
else if(operator === "*"){
    alert(number1*number2);
}
else if(operator === "/"){
    alert(number1/number2);
}
else if(operator === "%"){
    alert(number1 % number2);
}
else{
    alert("please enter +,-,*,/ and %");
}

