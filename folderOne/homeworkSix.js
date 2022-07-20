
// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
let sentence = 'have a wondeRFUL day';
function titleCase(sentence){
    let space = '';
    let splitSentence = sentence.toLowerCase().split(' ');
    for(i = 0 ; i <= splitSentence.length - 1; i++) {
        space = space + splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1) + ' ' ;
    }
    return space;

}
console.log(titleCase(sentence));

/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 let sentence2 = 'havE a GoOD Day';
 
 function reverse(sentence2) {
    let splitSentence2 = sentence2.toLowerCase().split(' ');
    let blank = '';
    for(i =  splitSentence2.length - 1; i >= 0 ; i--) {
        blank = blank + splitSentence2[i] + ' ' ;
    }
    return blank;

 }
 console.log(reverse(sentence2));

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 let array = [1,2,3,4,5];
 
 
 function sum(array) {
    let sum = 0;
    for (i = 0 ; i <= array.length - 1 ; i ++){
        sum = sum + array[i];
    }
    return sum;

 }

  console.log(sum(array));

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let arrayForAvg = [1, 2, 3, 4, 5];
 
 function avg(arrayForAvg) {
    
    let total = 0;
    let average = 0;
    let arrayLength = arrayForAvg.length;
    for (i = 0 ; i <= arrayForAvg.length - 1 ; i ++){
        total = total + arrayForAvg[i];
        average = total/arrayLength;
    }   
    return average;
 }
 console.log(avg(arrayForAvg));
