// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */

let studentScore = 82.5;
let maxScore = 100;

let scorePercentage = (studentScore/maxScore)*100;
if(scorePercentage >= 91){
    console.log(`Student score -> ${scorePercentage} % -> Grade-A`);
} else if (scorePercentage >= 81 && scorePercentage <= 90.99){
    console.log(`Student score -> ${scorePercentage} % -> Grade-B`);
} else if ((scorePercentage >= 71) && (scorePercentage <= 80.99)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-C`);
} else if (scorePercentage >= 61 && scorePercentage <= 70.99){
    console.log(`Student score -> ${scorePercentage} % -> Grade-D`);
} else if (scorePercentage >= 51 && scorePercentage <= 60.99){
    console.log(`Student score -> ${scorePercentage} % -> Grade-E`);
} else {
    console.log(`Student score -> ${scorePercentage} % -> Grade-F`);
}

/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */

let number = 9;

if (number%5 === 0){
    console.log(`Number ${number} is divisible by 5`);
} else if (number%3 === 0){
    console.log(`Number ${number} is divisible by 3`);
} else if (number%5 === 0 && number%3 === 0){
    console.log(`Number ${number} is divisible by 5 and 3`);
} else {
    console.log(`Number ${number} is NOT divisible by 5 and by 3`);
}


/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 let planets = [ 'Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];
//  let newPlanets = planets.unshift('Earth');
 
 if (planets[0] === 'Earth'){
    console.log(`Earth is mentioned in expected index`);
 }else {
    planets.unshift('Earth'); 
    console.log(`${planets}`);
 }

/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */

 let sports = ['Football', 'cricket', 'Soccer', 'Baseball', 'BASKETBALL', 'Rugby'];

 if (sports[2].toUpperCase() !== 'BASKETBALL' && sports.includes('BASKETBALL')){
    console.log(`BASKETBALL is mentioned in the sports array`);
 } else if (sports[2].toUpperCase() === 'BASKETBALL'){
    console.log(`BASKETBALL is present at index-2`);
 } else {
    let insertBasketballInIndex2 = sports.splice(2,1,'BASKETBALL');
    console.log(`Replaced value -> ${insertBasketballInIndex2}`);
 }





