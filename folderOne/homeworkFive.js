// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

let sentence = 'my NamE is ChowdHURY RozA';

let lowercaseSentence = sentence.toLowerCase();
let splitSentence = lowercaseSentence.split(' ');
let space = '';

for(i = 0 ; i <= splitSentence.length - 1; i++) {
    space = space + splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1) + ' ' ;
}
console.log(`\nSentence '${sentence}' in titlecase -> ${space}`);

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 let sentence2 = 'havE a GoOD Day';

 let lowercaseSentence2 = sentence2.toLowerCase();
 let splitSentence2 = lowercaseSentence2.split(' ');
 let blank = '';
 
 for(i =  splitSentence2.length - 1; i >= 0 ; i--) {
     blank = blank + splitSentence2[i] + ' ' ;
 }
 console.log(`\nSentence '${sentence2}' in reverse -> ${blank}`);
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

let array = [1,2,3,4,5];
let sum = 0;

for (i = 0 ; i <= array.length - 1 ; i ++){
    sum = sum + array[i];
}
 console.log(`\nSum of numbers ${array} -> ${sum}`);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let arrayForAvg = [1, 2, 3, 4, 5];
 let arrayLength = arrayForAvg.length;
 let total = 0;
 
 for (i = 0 ; i <= arrayForAvg.length - 1 ; i ++){
     total = total + arrayForAvg[i];
 }
 console.log(`\nAverage of numbers ${arrayForAvg} -> ${total/arrayLength}\n`);

//  console.log(`${sum/arrayLength}`);