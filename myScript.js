// #1 Checking if a number is big

const checkNumber = function (number) {
  const sum = number >= 100;
  return "number is big";
};
const result = checkNumber(101);
console.log(result);

//this function calculate something

// #2 Bouncer at a club
//(HIERONDER EERST IF/ ELSE STATEMENTS GEMAAKT OM DE OPDRACHT TE MAKEN)
// const bouncerCheck = function (maxmumNum, currentNum, agePerson) {
/*.let maxmumNum = 45;
if (maxmumNum <= 50) console.log("come in");
else if (maxmumNum >= 50) console.log("it's too busy now, come back later");

let currentNum = 45;
if (currentNum <= 50) console.log("come in");
else if (currentNum >= 80) console.log("it's not okay now, come back later");

let agePerson = 15;
if (agePerson >= 20) console.log("come in");
else if (agePerson <= 20) console.log("this is a club for adults");*/
// };
// [(46, 36, 26)];

const maxmumNum = function (numMax, numCur, numAge) {
  let sum = numMax;
  if (sum <= 50) {
    return "come in now";
  }
  let sum2 = numCur;
  if (sum2 === 45) {
    return "come in it is not to bussy";
  }
  let sum3 = numAge;
  if (sum3 > 20) {
    return "this is a club for adults";
  }

  return "it's too busy now, come back later";
};
// Brenda will return one of three sentences
// This function produce something
const result1 = maxmumNum(51, 16, 110);
const result2 = maxmumNum(55, 45, 19);
const result3 = maxmumNum(50, 45, 90);
const result4 = maxmumNum(60, 35, 15);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
// klopt het dat je maar een resultaat krijgt door de return statement?

// #Calculating the average

const averageNumbers = function (num1, num2, num3, num4, num5) {
  const sumAverage = [num1 + num2 + num3 + num4 + num5] / 3;
  return Math.round(sumAverage);
};
const result6 = averageNumbers(1, 2, 3, 4, 5);
const result7 = averageNumbers(4, 2, 8, 10, 12);
const result8 = averageNumbers(4, 3.6, 8, 13, 1.5);
const result9 = averageNumbers(55.55, 77, 107, 33.3, 95);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
// This function calculate something
