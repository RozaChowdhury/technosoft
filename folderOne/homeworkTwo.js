// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
let length_sentence1 = sentence1.length >= 10 ? 15 : 25;
result1 = length_sentence1;
console.log(`\nLength of "${sentence1}" -> ${sentence1.length}`);
console.log(`Assigned value in result1 -> ${result1}\n`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

let sentence2_Replace_a_Alpha_ignoreCases = sentence2.replace(/a/gi, 'Alpha');

console.log(`${sentence2}`);
console.log(`After replacing all a/A with 'Alpha' -> ${sentence2_Replace_a_Alpha_ignoreCases}\n`);

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

//  * print the result in console:
console.log(`${sentence3}`);

//  * 1. the length of sentence-3
let length_sentence3 = sentence3.length;
console.log(`1. Length -> ${length_sentence3}`);

//  * 2. does sentence-3 starts with 'health' (ignore cases)
let startsWithPattern = 'health';
let sentence3_Uppercase = sentence3.toUpperCase();
let startsWithPattern_Uppercase = startsWithPattern.toUpperCase();
let sentence3_startsWith_health = sentence3_Uppercase.startsWith(startsWithPattern_Uppercase);
console.log(`2. Sentence starts with 'health' -> ${sentence3_startsWith_health}`);

//  * 3. does sentence-3 contains with 'Body' (ignore cases)
let includesPattern = 'Body';
let includesPattern_Uppercase = includesPattern.toUpperCase();
let sentence3_includes_body = sentence3_Uppercase.includes(includesPattern_Uppercase);
console.log(`3. Sentence contains 'Body' -> ${sentence3_includes_body}`);

//  * 4. index of 'Body' in sentence3  (ignore cases)
let index_of_body = sentence3_Uppercase.indexOf(includesPattern_Uppercase);
console.log(`4. Index of 'Body' -> ${index_of_body}`);

//  * 5. the last-character in sentence-3
let lastIndex = length_sentence3 -1;
let charAt_lastIndex = sentence3.charAt(lastIndex);
console.log(`5. Last character in sentence -> ${charAt_lastIndex}`);

//  * 6. word 'Body' is present only once. (true or false)
let sentence3_includes_body_atLeastOnce = index_of_body == -1 ? false : true;
console.log(`6. Body is present in sentence at least once -> ${sentence3_includes_body_atLeastOnce}\n`);







