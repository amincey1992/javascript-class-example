/**
 * Created by Mincey on 10/21/16.
 */

// loop i starting from 99, minus 1 each time looped until i is less than or equal to 0
// if i is greater than 2 and less than or equal to 99 do regular coundown
// if i is equal to the value of 2 regular coutdown with singular bottle of beer for the 1
// if i is equal to the value of 1 singular bottles of beer on the wall in addition to no more beer
// if all else is not found to be true tell a sad story about there being no more bottles of beer
// end on a happy note that the gas station down the street might still be open and encourage user to go get some more



for (var i = 99; i >= 0; i--){
    if (i > 2 && i <= 99) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    } else if (i === 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
    }else if (i === 1){
        console.log(i + " bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    }  else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

    }
}
