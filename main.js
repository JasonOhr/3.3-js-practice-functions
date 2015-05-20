/**
 * Created by firewaterjoe on 5/20/15.
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second){
    "use strict";
    if (first > second) {
        return first;
    }else return second;
}
console.assert(max(3,2) === 3 ,"max first");
console.assert(max(2,3) === 3 ,"max second");
console.assert(max(3,3) === 3 ,"max equal");
console.log("max complete");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third){
    "use strict";
   var array = [first,second,third];
    var large = array.shift();
    for(var i = 0; i< array.length; i++){
        var temp = array[i];
        if (large > temp){
            array.shift();
        }else large = temp;
    }
    return large;
}

console.assert(maxOfThree(3,2,1) === 3,"maxOfThree first");
console.assert(maxOfThree(1,2,3) === 3,"maxOfThree third");
console.assert(maxOfThree(2,3,1) === 3,"maxOfThree middle");
console.assert(maxOfThree(3,3,3) === 3,"maxOfThree equal");
console.log("maxOfThree complete");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    char = char.toLowerCase();
    var vowels = ["a","e","i","o","u"];

    return (vowels.indexOf(char) > -1)
}
console.assert(isVowel("a"),"isVowel a");
console.assert(isVowel("b") === false,"isVowel b");
console.assert(isVowel("u"),"isVowel u");
console.assert(isVowel("I"),"isVowel I");
console.log("isVowel complete");

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var vowels = ["a","e","i","o",'u'];
    var phraseArray = phrase.split("");
    var phraseChar;
    for(var i = 0; i < phraseArray.length; i++){
        phraseChar = phraseArray[i];
        if(vowels.indexOf(phraseChar) > 0 || phraseChar === " "){

        }else {

            phraseChar = phraseChar + "o" + phraseChar;
            phraseArray[i] = phraseChar;
        }
    }
    return phraseArray.join("");

}
console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon");
console.log("rovarspraket complete");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.assert(sum(1,2,3,4)=== 10, "sum 10");
console.log("sum complete");


function multiply(){
    "use strict";
    var product = 1;
    for(var i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}

console.assert(multiply(1,2,3,4) === 24, "multiply 24");
console.log("multiply complete");

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    var phraseArray = arguments[0].split("");
    return phraseArray.reverse();
}
console.assert(arraysEqual( reverse("hello buddy"),["y", "d", "d", "u", "b", " ", "o", "l", "l", "e", "h"]));
console.log("reverse complete");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    // var phraseArray = words.split(" ");
    // I originally did incorrectly with just a string and used this to separate it
    var phraseArray = words;
    var large = phraseArray.shift();
    for (var i = 0; i < phraseArray.length; i++) {
        var temp = phraseArray[i];
        if(large.length > temp.length){

            phraseArray.shift();
        }else {
            large = temp;
        }
    }
    return large.length;
}
console.assert(findLongestWord(["Now","is","the", "winter", "of", "our", "discontent"]) === 10, "findLongestWord 10");
console.log("findLongestWord complete");
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var wordsArray = [];
    for(var j = 0; j < words.length; j++){
        var temp = words[j];
        if (temp.length > i){
            wordsArray.push(temp);
        }
    }
    return wordsArray;
}

console.assert(arraysEqual( filterLongWords(["Now","is","the", "winter", "of", "our", "discontent"], 4), ["winter", "discontent"]));
console.log("filterLongWords complete");

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    string = string.split("");
    var countObject = {};
    for(var i = 0; i < string.length; i++){
        var letter = string[i];
        countObject[letter] = countObject[letter] || 0;
        countObject[letter] +=1;
    }
    return countObject;


}

console.assert(objectsEqual(charFreq("abbabcbdbabdbdbabababcbcbabqwqwqw"),{a: 7, b: 14, c: 3, d: 3, q: 3, w: 3}));
console.log("charFreq complete");

//functions to help with assertion testing
function arraysEqual(one, two) {
    var areEqual = true;
    if(one.length != two.length) return false;
    one.forEach(function(el, i) {
        if(el != two[i]) {
            areEqual = false;
        }
    });
    return areEqual;
}

function objectsEqual(a, b) {
    var areEqual = true;
    if (objectSize(a) != objectSize(b)) {
        return areEqual = false;
    }
    for (var key in a) {
        if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
            if (a[key] != b[key]) {
                return areEqual = false;
            }
        } else {
            return areEqual = false;
        }
    }
    return areEqual;
}

function objectSize(object) {
    var size = 0;
    for (var key in object) {
        if (object.hasOwnProperty) {
            size++;
        }
    }
    return size;
}