/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */
class MyCodeTestFunctions{
    removeGivenNumber(array, num){
        for(let i = num ; array.includes(num) === true ; i++){
            let firstOccurence = array.indexOf(num);
            let newArray = array.splice(firstOccurence,1);
        }
        return array;    
    }
// console.log(removeGivenNumber([12, 13, 14, 17, 18],20));


/**
 * Create a function to return the missing smallest positive number in given array
 * 
 * 
 * [1, 2, 3, 4, 5]   ->   6
 * 
 * [2, 3, 1, 56, 23, 11]  ->   4
 * 
 * [-1, 0, 2, 1]    ->  3
 * 
 * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
 * 
 * 
 */


    removeSmallestInteger(array){
        let num = [];
        for( let i=0 ; i<array.length ; ++i){
            if (array[i] >= 0){
                num[array[i]] = true;
            }
        }
     for( let i=1 ; i <= num.length ; ++i){
            if (num[i] === undefined){
                return i;
            }
        }
        return 1;
    }

//   console.log(removeSmallestInteger([1, 1, 2, 4, 3, 6, 4, 7, 9]));



/**
 * Create a function to return the points to be marked against for over speeding.
 * 
 * For every 5mph over the speed limit, 1 point should be marked
 * 
 * function will:
 *      take userSpeed and speedLimit as input
 *      return the number of points should be marked against the license.
 * 
 * 
 * 
 * sl= 60 , us = 70 -> points = 2
 * 
 * sl = 60 , us = 63 -> points = 0
 * 
 * sl = 75 , us = 70 -> points = 0
 * 
 * sl = 80 , us = 88 -> points = 1
 */


    returnPoints(userSpeed, speedLimit){
        let points = 0;
        for (let i = userSpeed ; i > speedLimit ; i =+ 5){
            points++;
        }
        return points;
    }
// console.log(returnPoints(50,70));
}

module.exports = MyCodeTestFunctions;