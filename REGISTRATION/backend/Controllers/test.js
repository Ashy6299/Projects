// function AgeChecker(year) {
//   const currentYear = new Date().getFullYear();

//   if (year > currentYear)
//     return `You will be ${year - currentYear} years old in ${year}`;
//   return `Your Age is ${currentYear - year}`;
// }
// console.log(AgeChecker(1993));

// function LeapYearAge(year) {
//   if (year % 4 === 0) return "This is a leap year";
//   return "This is not a leap year";
// }

// function zakkatAndtithe(salary) {
//   const expenditure = {};
//   const zakkat = salary * 0.4;
//   const tithe = salary * 0.1;
//   const balanceAfterzakkat = salary - zakkat;
//   const balanceAftertithe = salary - tithe;
//   expenditure.zakkat = zakkat;
//   expenditure.tithe = tithe;
//   expenditure.balanceAftertithe = balanceAftertithe;
//   expenditure.balanceAfterzakkat = balanceAfterzakkat;
//   expenditure.salary = salary;

//   return expenditure;
// }

// console.log(zakkatAndtithe(100000));

// // function Zakkat(salary) {
// //   return `Your Zakkat is ${(40 / 100) * salary}`;
// // }
// // console.log(Zakkat(100000));

// function vowelChecker(sentences) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   const vowelsInSentence = [];

//   for (let i = 0; i < sentences.length; i++) {
//     if (
//       vowels.includes(sentences[i].toLowerCase()) &&
//       !vowelsInSentence.includes(sentences[i].toLowerCase())
//     ) {
//       vowelsInSentence.push(sentences[i]);
//     }
//   }
//   return vowelsInSentence.sort();
// }
// console.log(vowelChecker("My school is in ekpoma"));

// function verifier(staffName) {
//   const EmployedStaff = ["musa", "muzamil", "tony", "adams"];
//   const verifiedStaff = [];

//   for (let i = 0; i < EmployedStaff.length; i++) {
//     if (EmployedStaff.includes(staffName)) {
//       verifiedStaff.push(staffName);
//     }
//   }
//   return verifiedStaff;
// }
// console.log(verifier("tijani"));

// function verifier(staffName) {
//   const employedStaff = ["musa", "muzamil", "tony", "adams"];
//   const verifiedStaff = [];

//   if (employedStaff.includes(staffName.toLowerCase())) {
//     verifiedStaff.push(staffName);
//   }

//   return verifiedStaff;
// }

// console.log(verifier("mus"));

// function verifier(staffName) {
//   const employedStaff = ["musa", "muzamil", "tony", "adams"];
//   const verifiedStaff = [];

//   for (let i = 0; i < employedStaff.length; i++) {
//     if (!employedStaff.includes(staffName.toLowerCase())) {
//       verifiedStaff.push(staffName);
//     }
//   }

//   return verifiedStaff;
// }

// console.log(verifier("tijani"));

// function seperator(phoneNumber) {
//   phoneNumber = phoneNumber.toString();
//   const evenNumbers = [];
//   const oddNumbers = [];
//   for (let i = 0; i < phoneNumber.length; i++) {
//     if (Number(phoneNumber[i]) % 2 === 0)
//       evenNumbers.push(Number(phoneNumber[i]));
//     else oddNumbers.push(Number(phoneNumber[i]));
//   }
//   return { evenNumbers, oddNumbers };
// }
// console.log(seperator("08163544705"));

// function seperator(phoneNumber) {
//   phoneNumber = phoneNumber.toString();
//   const evenPosition = [];
//   const oddPosition = [];
//   for (let i = 0; i < phoneNumber.length; i++) {
//     if (i % 2 === 0)
//       evenPosition.push({ character: phoneNumber[i], position: i });
//     else oddPosition.push({ character: phoneNumber[i], position: i });
//   }

//   return { evenPosition, oddPosition };
// }
// console.log(seperator("08163544705"));

// function seperator(phoneNumber) {
//   phoneNumber = phoneNumber.toString();
//   const evenPosition = [];
//   const oddPosition = [];
//   for (let i = 0; i < phoneNumber.length; i++) {
//     if (Number(phoneNumber[i]) > 5)
//       evenPosition.push({ character: phoneNumber[i], position: i });
//     else oddPosition.push({ character: phoneNumber[i], position: i });
//   }

//   return { evenPosition, oddPosition };
// }
// console.log(seperator("08163544705"));

// function Ananogram(words) {
//   if (words === [...words].reverse().join(""))
//     return `the word ${words} is an ananogram`;
//   return `the word ${words} is not an ananogram`;
// }
// console.log(Ananogram("ababa"));

function commonLetters(wordOne, wordTwo) {
  wordOne = wordOne.toString();
  wordTwo = wordTwo.toString();
  const similarLetters = [];
  for (let i = 0; i < wordTwo.length; i++) {
    if ([...wordOne].includes(wordTwo[i])) {
      similarLetters.push(wordTwo[i]);
    }
  }
  return similarLetters;
}
console.log(commonLetters("res", "res"));

// function commonLetters(wordOne, wordTwo) {
//   const similarLetters = [];
//   for (let i = 0; i < wordTwo.length; i++) {
//     [...wordOne].includes(wordTwo[i]) ? similarLetters.push(wordTwo[i])
//   }

//   return similarLetters;
// }
// console.log(commonLetters("yatch", "hang"));

function AgeRange(range) {
  const advices = {
    Age5: "carry them",
    Age9: "advice them",
    Age12: "scold them",
  };
  if (range === 5) return advices.Age5;
  if (range === 9) return advices.Age9;
  if (range === 12) return advices.Age12;
}
console.log(AgeRange(12));
