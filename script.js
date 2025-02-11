// let i = 1;

// while (i < 5) {
//   console.log(i);
//   i++;
// }
// let num = 0;

// if (num < 0) {
//   console.log("-");
// } else if (num == 0) {
//   console.log("0");
// } else {
//   console.log("+");
// }

// let num1 = prompt("Num1:");
// let num2 = prompt("Num2:");
// let num3 = prompt("Num3:");

// if (num1 > num2 && num1 > num3) {
//   console.log("Num1", num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Num2", num2);
// } else {
//   console.log("Num3", num3);
// }

// let max;

// if (num1 > num2 ){
//     max = num1;
// }else if (num3 > num1) {
//     max = num3;
// }else{
//     max = num2;
// }

// console.log (max)

// let score = "A";
// A 91-100
// B 81-90
// C 71-80
// D 61-70

// if (score > 90) {
//   console.log("A");
// } else if (score > 80) {
//   console.log("B");
// } else if (score > 70) {
//   console.log("C");
// } else if (score > 60) {
//   console.log("D");
// } else {
//   console.log("fail");
// }

// switch (score) {
//   case "A":
//     console.log("90-100");
//     break;
//   default:
//     console.log("F");
// }

// // 📌 1-10: მონაცემთა ტიპები და ცვლადები
// // 1.	ცვლადის შექმნა: შექმენი ცვლადი name და მიანიჭე შენი სახელი, შემდეგ დაბეჭდე კონსოლში.
// let userName = "Goga";
// console.log(userName);

// // 2.	ნომერული ცვლადი: შექმენი ორი რიცხვითი ცვლადი x და y, გააერთიანე მათი მნიშვნელობები და დაბეჭდე შედეგი.
// let x = 343;
// let y = 4354;
// let sum = x + y;
// console.log(sum);

// // 3.	სტრიქონული გაერთიანება: შექმენი ცვლადები firstName და lastName, გააერთიანე ისინი და დაბეჭდე.
// let firstName = "Goga";
// let lastName = "Bagauri";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // 4.	ბულიენი ცვლადი: შექმენი ბულიენი ცვლადი isJavaScriptFun და დაუნიშნე true. შემდეგ დაბეჭდე.
// let isJavaScriptFun = true;
// console.log(isJavaScriptFun);

// // 5.	null და undefined: შექმენი ცვლადი emptyVar = null და undefinedVar, შემდეგ დაბეჭდე მათი ტიპები.
// let emptyVar = null;
// let undefinedVar;
// console.log(typeof emptyVar, typeof undefinedVar);

// // 6.	typeof გამოყენება: შექმენი სხვადასხვა ტიპის ცვლადები და დაბეჭდე მათი მონაცემთა ტიპები.
// let num = 3;
// const text = "String";
// var something = num + text;
// console.log(
//   `letNumber: ${num}, constText: ${text}, varSomething: ${something}`
// );

// // 7.	მომხმარებლის შეყვანა: prompt()-ით მომხმარებელს სთხოვე სახელი და დაბეჭდე "გამარჯობა, [სახელი]!"
// let inputName;
// do {
//   inputName = prompt("შეიყვანეთ თქვენი სახელი:");
// } while (inputName.trim() === "");
// console.log("გამარჯობა", inputName);

// // 8.	რიცხვების კომბინაცია: let num1 = "5"; let num2 = 10; რა შედეგი გამოვა console.log(num1 + num2);? რატომ?
// let num1 = "5";
// let num2 = 10;
// console.log(num1 + num2);

// // 9.	სტრიქონული მანიპულაციები: let text = "JavaScript"; როგორ გამოვიტანოთ Script ამ სტრიქონიდან?
// let text = "JavaScript";
// let splitedText = text.split(/(?=[A-Z])/);
// console.log(splitedText[1]);

// // 10.	ქვეტექსტის პოვნა: let sentence = "I love JavaScript!"; შეამოწმე, შეიცავს თუ არა "love"-ს.
// let sentence = "I love JavaScript!";
// console.log(sentence.includes("love"));

// // 📌 11-20: არითმეტიკული ოპერაციები
// // 11.	მიმატება და გამოკლება: a = 15; b = 5; შეასრულე +, -, *, /, % მოქმედებები.
// let a = 15;
// let b = 5;
// let sum = a + b;
// let extraction = a - b;
// let multiplication = a * b;
// let division = a / b;
// let division2 = a % b;
// console.log(sum, extraction, multiplication, division, division2);

// // 12.	ინკრემენტაცია: let count = 0; გაზარდე და შეამცირე count 1-ით.
// let count = 0;
// count++;
// console.log(count);
// count--;
// console.log(count);

// // 13.	ტემპერატურის გარდაქმნა: მომხმარებელს სთხოვე ტემპერატურა ცელსიუსში და გარდაქმენ ფარენჰეიტში.
// let celsius = +prompt("Enter the temperature: ");
// let farenheit = (celsius * 9) / 5 + 32;
// console.log("Farenheit: ", farenheit);

// // 14.	ორი რიცხვის საშუალო: მომხმარებელს სთხოვე ორი რიცხვი და გამოითვალე მათი საშუალო.
// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");
// let average = (num1 + num2) / 2;
// console.log("Averate of your numbers: ", average);

// // 15.	ფართობის გამოთვლა: მომხმარებელს სთხოვე მართკუთხა პარალელოგრამის სიგრძე და სიგანე, შემდეგ გამოთვალე ფართობი.
// let length = +prompt("Enter length of the  parallelogram: ");
// let width = +prompt("Enter width of the  parallelogram: ");
// let area = length * width;
// console.log("The area of the parallelogram is: ", area);

// // 16.	ციფრების ჯამი: მომხმარებელს სთხოვე ორნიშნა რიცხვი და გამოითვალე მისი ციფრების ჯამი (მაგ. 23 -> 2+3=5).
// let number;
// const isNum = (num) => typeof num === "number" && !isNaN(num) && num >= 10;
// do {
//   number = +prompt("Enter a number: ");
// } while (!isNum(number));
// let digitsArr = number.toString().split("");
// let sum = 0;
// for (let i = 0; i < digitsArr.length; i++) {
//   let digit = Number(digitsArr[i]);
//   sum += digit;
// }
// console.log("Sum of the digits of your number is: ", sum);

// // 17.	დანარჩენის გამოთვლა: მომხმარებელს სთხოვე ორი რიცხვი და გამოითვალე მათი გაყოფის ნაშთი.
// let number1;
// let number2;
// const isNum = (num) => typeof num === "number" && !isNaN(num);
// do {
//   number1 = +prompt("Enter a first number: ");
// } while (!isNum(number1));
// const isNumber = (num) => typeof num === "number" && !isNaN(num);
// do {
//   number2 = +prompt("Enter a second number: ");
// } while (!isNumber(number2));
// let division = number1 % number2;
// console.log("The division remainder is: ", division);

// // 18.	თითქმის 10: მომხმარებლის შეყვანილი რიცხვი შეამოწმე, ახლოსაა თუ არა 10-თან (abs(num - 10) <= 2).
// let number;
// const isNum = (num) => typeof num === "number" && !isNaN(num);
// do {
//   number = +prompt("Enter a first number: ");
// } while (!isNum(number));
// if (Math.abs(number - 10) <= 2) {
//   console.log("Your number is close to 10");
// } else {
//   console.log("Your number is not close to 10");
// }

// // 19.	მომხმარებლის დაბადების წელი: მომხმარებელს სთხოვე ასაკი და გამოითვალე დაბადების წელი.
// let age;
// const isNum = (num) => typeof num === "number" && !isNaN(num);
// do {
//   age = +prompt("Enter a first number: ");
// } while (!isNum(age));
// const currentDate = new Date().getFullYear();
// const birthDate = currentDate - age;
// console.log("Your birth year is: ", birthDate);

// // 20.	კუთხეების გამოთვლა: მომხმარებელს სთხოვე სამკუთხედის ორი კუთხის ზომები და გამოთვალე მესამე კუთხე.
// let angle1;
// let angle2;
// const isNum = (num) => typeof num === "number" && !isNaN(num);
// do {
//   angle1 = +prompt("Enter a first angle: ");
// } while (!isNum(angle1));
// const isNumber = (num) => typeof num === "number" && !isNaN(num);
// do {
//   angle2 = +prompt("Enter a second angle: ");
// } while (!isNumber(angle2));
// const angle3 = 180 - (angle1 + angle2);
// console.log("Third angle is :", angle3);

// // 📌 21-30: if-else და პირობითი ოპერატორები
// // 21.	რიცხვი დადებითი, უარყოფითი თუ ნულოვანია?
// const num = -2000;
// if (num < 0) {
//   console.log("Number is negative");
// } else if (num > 0) {
//   console.log("Number is positive");
// } else {
//   console.log("Number equals to zero");
// }

// // 22.	ლუწია თუ კენტი?
// const num = 1;
// num % 2 === 0 ? console.log("even") : console.log("odd");

// // 23.	სრულიწლოვანია თუ არა (age >= 18)?
// const age = 4;
// age >= 18 ? console.log("Adult") : console.log("No adult");

// // 24.	ყველაზე დიდი რიცხვი (სამი რიცხვიდან)?
// const num1 = 40;
// const num2 = 20;
// const num3 = 40;

// if (num1 > num2 && num1 > num3) {
//   console.log("Biggest number is num1");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Biggest number is num2");
// } else if (num3 > num1 && num3 > num2) {
//   console.log("Biggest number is num3");
// } else {
//   console.log("At least 2 numbers are same");
// }

// // 25.	მხოლოდ დადებითი რიცხვების დაბეჭდვა (if-ის გამოყენებით)?
// const num = 3;
// if (num > 0) {
//   console.log(num);
// } else {
//   console.log("Number is not positive");
// }

// // 26.	შეამოწმე, რიცხვი 5-ის ჯერადია თუ არა?
// const num = 3;
// num % 5 === 0
//   ? console.log("The number is a multiple of 5.")
//   : console.log("The number is not a multiple of 5.");

// // 27.	მომხმარებლის შეყვანილი დღე (1 = ორშაბათი, 2 = სამშაბათი...) დაბეჭდე?
// const isNum = (num) =>
//   typeof num === "number" && !isNaN(num) && num > 0 && num <= 7;
// do {
//   day = +prompt("Enter a number as the weekday: ");
// } while (!isNum(day));
// if (day > 6) {
//   console.log("კვირა");
// } else if (day > 5) {
//   console.log("შაბათი");
// } else if (day > 4) {
//   console.log("პარასკვი");
// } else if (day > 3) {
//   console.log("ხუთშაბათი");
// } else if (day > 2) {
//   console.log("ოთხშაბათი");
// } else if (day > 1) {
//   console.log("სამშაბათი");
// } else if (day > 0) {
//   console.log("ორშაბათი");
// }

// // 28.	ორი რიცხვის მინიმუმის პოვნა?
// const num1 = 5;
// const num2 = 5;
// if (num1 > num2) {
//   console.log("First number is bigger to second number.");
// } else if (num1 < num2) {
//   console.log("First number is smaller to second number.");
// } else {
//   console.log("Numbers are equal.");
// }

// // 29.	მომხმარებლის შეყვანილი წელი ნაკიანია თუ არა?
// let year;
// const h2 = document.getElementById("h2");
// console.log(h2);
// const isNum = (num) => typeof num === "number" && !isNaN(num) && num > 0;
// do {
//   year = +prompt("Enter the year: ");
// } while (!isNum(year));
// year % 4 === 0
//   ? (h2.innerText = "ნაკიანი წელიწადი.")
//   : (h2.innerText = "არ არის ნაკიანი წელიწადი.");

// // 30.	ქულების შეფასება (90+ = A, 80-89 = B, 70-79 = C...)
// let grade;
// const isNum = (num) =>
//   typeof num === "number" && !isNaN(num) && num > 0 && num <= 100;
// do {
//   grade = +prompt("Enter the grade: ");
// } while (!isNum(grade));
// if (grade > 89) {
//   console.log("A");
// } else if (grade > 79) {
//   console.log("B");
// } else if (grade > 69) {
//   console.log("C");
// } else if (grade > 59) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("Fail");
// }

// // 📌 31-40: switch-case და while ციკლი
// // 31.	კვირის დღეების სახელები (switch-case)?
// const isNum = (num) =>
//   typeof num === "number" && !isNaN(num) && num > 0 && num <= 7;
// do {
//   day = +prompt("Enter a number as the weekday: ");
// } while (!isNum(day));
// switch (day) {
//   case 1:
//     console.log("ორშაბათი");
//     break;
//   case 2:
//     console.log("სამშაბათი");
//     break;
//   case 3:
//     console.log("ოთხშაბათი");
//     break;
//   case 4:
//     console.log("ხუთშაბათი");
//     break;
//   case 5:
//     console.log("პარასკვი");
//     break;
//   case 6:
//     console.log("შაბათი");
//     break;
//   case 7:
//     console.log("კვირა");
// }

// // 32.	მოსწავლის ასაკის მიხედვით კლასის განსაზღვრა (switch-case)?
// const isNum = (num) => typeof num === "number" && !isNaN(num) && num > 0;
// do {
//   age = +prompt("Enter child's age: ");
// } while (!isNum(age));
// switch (age) {
//   case 3:
//   case 4:
//   case 5:
//     console.log("Preschool / Kindergarten");
//     break;
//   case 6:
//   case 7:
//     console.log("1st Grade");
//     break;
//   case 7:
//   case 8:
//     console.log("2nd Grade");
//     break;
//   case 8:
//   case 9:
//     console.log("3rd Grade");
//     break;
//   case 9:
//   case 10:
//     console.log("4th Grade");
//     break;
//   case 10:
//   case 11:
//     console.log("5th Grade");
//     break;
//   case 11:
//   case 12:
//     console.log("6th Grade");
//     break;
//   case 12:
//   case 13:
//     console.log("7th Grade");
//     break;
//   case 13:
//   case 14:
//     console.log("8th Grade");
//     break;
//   case 14:
//   case 15:
//     console.log("9th Grade");
//     break;
//   case 15:
//   case 16:
//     console.log("10th Grade");
//     break;
//   case 16:
//   case 17:
//     console.log("11th Grade");
//     break;
//   case 17:
//   case 18:
//     console.log("12th Grade");
//     break;
//   default:
//     console.log("Age out of school range");
// }

// // 33.	მომხმარებლის შეყვანილი სიმბოლო ხმოვანია თუ თანხმოვანი (switch-case)?
// let userInput;
// do {
//   userInput = prompt("Enter a single letter: ");
// } while (!/^[a-zA-Z]$/.test(userInput));
// switch (userInput) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log(userInput, " is a vowel.");
//     break;
//   default:
//     console.log(userInput, " is a consonant.");
// }

// // 34.	1-იდან 10-მდე რიცხვების დაბეჭდვა (while ციკლით)?
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// // 35.	რიცხვების ჯამი 1-იდან 100-მდე (while ციკლით)?
// let num = 0;
// let sum = 0;
// while (num <= 100) {
//   sum += num;
//   num++;
// }
// console.log(sum);

// // 36.	მომხმარებლის შეყვანილი რიცხვის ფაქტორიალის გამოთვლა (while)?
// let userInput;
// let num = 1;
// let factorial = 1;
// do {
//   userInput = Number(prompt("Enter a number: "));
// } while (isNaN(userInput));
// if (userInput < 1) {
//   console.log("Factorial of ", userInput, " is 0.");
// } else {
//   while (num <= userInput) {
//     factorial *= num;
//     num++;
//   }
//   console.log("Factorial of ", userInput, " is ", factorial);
// }

// // 37.	მომხმარებლის შეყვანილი რიცხვის რიცხვითი სიდიდის დადგენა (e.g., 345 -> 3 ციფრი)?
// //-------------------------------------------------------------------------------------------------
// let num = "434343";
// console.log(num.length);

// // 38.	პროგრამა, რომელიც სთხოვს მომხმარებელს რიცხვს, სანამ არ შეიყვანს სწორად (while)?
// let userInput;
// do {
//   userInput = Number(prompt("Enter a number: "));
// } while (isNaN(userInput));

// // 39.	ცხრილის გამრავლება (2-ის, 3-ის... while-ით)?
// let num = 1;
// while (num <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num, "x", i, "=", num * i);
//   }
//   num++;
// }

// // 40.	რიცხვების უკან გადათვლა (while 10-დან 1-მდე)?
// let num = 20;
// while (num > 0) {
//   console.log(num);
//   num--;
// }

// // 📌 41-50: ციკლები და ფუნქციები
// // 41.	for ციკლით 1-იდან 10-მდე რიცხვების დაბეჭდვა.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 42.	for-ით ლუწი რიცხვების დაბეჭდვა 1-დან 20-მდე.
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // 43.	მომხმარებლის შეყვანილი რიცხვის ყველა გამყოფის პოვნა (for).
// let num = 36;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// // 44.	for-ით ჯამი 1-იდან 100-მდე.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// // 45.	ფუნქცია, რომელიც აბრუნებს რიცხვის კვადრატს.
// function square(x) {
//   return x * x;
// }
// console.log(square(3));

// // 46.	ფუნქცია, რომელიც აბრუნებს ორი რიცხვის ჯამს.
// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(3, 8));

// // 47.	ფუნქცია, რომელიც ამოწმებს, რიცხვი ლუწია თუ კენტი.
// function evenOrOdd(x) {
//   x % 2 === 0
//     ? console.log("Then number is even.")
//     : console.log("Then number is odd.");
// }
// evenOrOdd(9);

// // 48.	ფუნქცია, რომელიც აბრუნებს მომხმარებლის შეყვანილი სტრიქონის სიგრძეს.
// function textLength(x) {
//   return x.length;
// }
// console.log(textLength("text"));

// // 49.	ფუნქცია, რომელიც ამოწმებს, არის თუ არა სტრიქონი ცარიელი.
// function checkEmpty(x) {
//   if (x.trim().length < 1) {
//     console.log("String is empty.");
//   } else {
//     console.log("String is not empty.");
//   }
// }
// checkEmpty("   ");

// // 50.	ფუნქცია, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ შორის მინიმუმს.
// function compare(x, y) {
//   if (x > y) {
//     return x;
//   } else if (x < y) {
//     return y;
//   } else {
//     return "Numbers are equal.";
//   }
// }
// console.log(compare(5, 9));
