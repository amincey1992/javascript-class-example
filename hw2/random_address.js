/**
 * Created by Mincey on 10/21/16.
 */
streetNumber = ["2435", "2667", "431", "19", "2158"];

streetName = ["Willy Wonka Road", "University Ave", "The Block Parkway", "Cumberland Drive", "Charlie Sheen Road"];

cityName = ["Atlanta", "Cobb", "Douglas", "Houston", "Miami"];

stateName = ["GA", "NC", "SC", "FL", "TN"];

zipcode = ["30039", "30336", "27009", "19340", "27364"];


//Choose a random number within the length of the array
var random1 = Math.floor((Math.random() * streetNumber.length));
var random2 = Math.floor((Math.random() * streetName.length));
var random3 = Math.floor((Math.random() * cityName.length));
var random4 = Math.floor((Math.random() * stateName.length));
var random5 = Math.floor((Math.random() * zipcode.length));

//display an item in each array using the random number
console.log(streetNumber[random1] + " " + streetName[random2] + ", " + cityName[random3] + " " + stateName[random4] + ", " + zipcode[random5]);