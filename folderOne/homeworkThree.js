/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */


let countryName = 'Bangladesh';
// split all the words and store in array
//find length of array
let afterSplitingWord = countryName.split('').length;
console.log(`\nLength -> ${afterSplitingWord}\n`);
 
 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 //split the sentence and store words in array
 //find length of array
 let sentence_splitWords = sentence.split(' ');
 let numberOfWords = sentence_splitWords.length;
 console.log(`Number of words -> ${numberOfWords}\n`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 const mySentence = 'YoU OnLY lIve OnCe';
 //make all lower case -> toLowerCase()
 //seperate the words and store in array -> split(' ')
 //seperate first letter and make capital for each index
 //Add remaining lower case letters
 //Add all the words

 let mySentenceLowerCase = mySentence.toLowerCase();
 let split_mySentenceLowerCase = mySentenceLowerCase.split(' ');
 let word1 = split_mySentenceLowerCase[0].charAt(0).substring(0,1).toUpperCase() + split_mySentenceLowerCase[0].substring(1);
 let word2 = split_mySentenceLowerCase[1].charAt(0).substring(0,1).toUpperCase() + split_mySentenceLowerCase[1].substring(1);
 let word3 = split_mySentenceLowerCase[2].charAt(0).substring(0,1).toUpperCase() + split_mySentenceLowerCase[2].substring(1);
 let word4 = split_mySentenceLowerCase[3].charAt(0).substring(0,1).toUpperCase() + split_mySentenceLowerCase[3].substring(1);

 console.log(`${word1}` + " " + `${word2}` + " " + `${word3}` + " " + `${word4}\n`);
 

 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
  const mySentence2 = 'yoU OnlY LIvE OnCe';

  let mySentenceLowerCase2 = mySentence2.toLowerCase();
  let split_mySentenceLowerCase2 = mySentenceLowerCase2.split(' ');
  let letter1 = split_mySentenceLowerCase2[0].charAt(0).substring(0,1).toUpperCase();
  let letter2 = split_mySentenceLowerCase2[1].charAt(0).substring(0,1).toUpperCase();
  let letter3 = split_mySentenceLowerCase2[2].charAt(0).substring(0,1).toUpperCase();
  let letter4 = split_mySentenceLowerCase2[3].charAt(0).substring(0,1).toUpperCase();
 
  console.log(`${letter1}` + `${letter2}` + `${letter3}` + `${letter4}\n`);