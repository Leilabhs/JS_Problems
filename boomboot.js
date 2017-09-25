/**
 * Created by h205p2 on 9/15/17.
 */
//write first method
function sleep_in(weekday,vacation) {
    if(weekday == false || vacation == true){
        return(true);
    }else if(weekday == true && vacation == false){
        return(false);
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == true){
        if(b_smile == true){
            return(true);
        }else if(b_smile == false){
            return(false);
        }
    }else if(a_smile == false){
        if(b_smile == false){
            return(true);
        }else if(b_smile == true){
            return(false);
        }
    }else{
        return(false);
    }
}

function string_times(string,int){
    var multipliedString = "";
    for(i = 0; i<int; i++){
        multipliedString += string;
    }
    return(multipliedString);
}

function front_times(string,n){
    var front = string.substring(0,3);
    var multipliedFront = "";
    for(i = 0; i<n; i++) {
        multipliedFront += front;
    }
    return(multipliedFront);
}

function string_bits(string){
    var bitString = "";
    for(var i=0; i<string.length; i+=2){
        var newLetter = string[i];
        bitString += newLetter;
    }
    return(bitString);
}

function caughtSpeeding(speed, birthday){
    if(birthday == false){
        if(speed <= 60){
            return(0);
        }else if(60 < speed && speed <=80) {
            return(1);
        }else if(speed > 80){
            return(2);
        }
    }else if(birthday == true){
        if(speed <= 65){
            return(0);
        }else if(65 < speed && speed <=85) {
            return(1);
        }else if(85 < speed){
            return(2);
        }
    }
}

function fizz_buzz(int){
    if(int % 3 == 0 && int % 5 == 0){
        return("FizzBuzz");
    }else if (int % 3 == 0){
        return("Fizz");
    }else if (int % 5 == 0){
        return("Buzz");
    }else if (int % 1 == 0){
        return(int + "!");
    }
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return(0);
    }else if(tea / 2 >= candy || candy / 2 >= tea){
        return(2);
    }else if(tea >= 5 && candy >= 5){
        return(1);
    }
}

function blackjack(int1, int2){
    if(int1<= 21 && int2 <= 21){
        return Math.max(int1, int2);
    }else if(int1 <= 21){
        return int1;
    }else if(int2<= 21) {
        return int2;
    }else if(int1 >21 && int2>21){
        return 0;
    }
}

function loneSum(a,b,c) {
    if (a == b && b == c) {
        return(0);
    } else if (a == b){
        return (c);
    }else if(b==c){
        return(a);
    }else if(a==c){
        return(b);
    }else if(a!=b && a!=c && b!= c){
        return(a + b + c);
    }
}

function firstLast6(ints){
    var first = ints[0];
    var last = ints[ints.length-1];
    if(first ==6 || last == 6){
        return(true);
    }else{
        return(false);
    }
}

function has23(array){
    var first = array[0];
    var second = array[1];
    if(first == 2 || second == 2 || first == 3 || second == 3){
        return(true);
    }else{
        return(false);
    }
}

function fix23(array){
    for(i=0; i<array.length; i++) {
        if (array[i] == 2 && array [i + 1] == 3) {
            array[i + 1] = 0;
        }
    }
    return(array);
}

function countYZ(string){
    var count = 0;
    for(i=0; i<string.length; i++){
        if(string[i]== "z" && string[i+1] == " "
            || string[i]== "z" && i + 1 == string.length
            || string[i]== "y" && string[i+1] == " "
            || string[i]== "y" && i + 1 == string.length
            || string[i]== "Z" && string[i+1] == " "
            || string[i]== "Z" && i + 1 == string.length
            || string[i]== "Y" && string[i+1] == " "
            || string[i]== "Y" && i + 1 == string.length){
            count++;
        }
    }
    return count;
}

function endOther(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if(string1.substring(string1.length - string2.length, string1.length) == string2
    || string2.substring(string2.length - string1.length, string2.length) == string1){
        return(true);
    }else{
        return(false);
    }
}

function starOut(str){
    var newStr = "";
    for(i=0; i<str.length; i++){
        if(str[i] != "*" && str[i + 1] == "*") {
        }else{
            newStr += str[i];
        }
    }
    var newStr2 = "";
    for(i=0; i<newStr.length; i++) {
        if (newStr[i] != "*" && newStr[i - 1] == "*") {
        }else{
            newStr2 += newStr[i];
        }
    }
    var newStr3 = "";
    for(i=0; i<newStr2.length; i++) {
        if(newStr2[i] == "*"){
        }else{
            newStr3 += newStr2[i];
        }
    }
    return(newStr3);
}


function getSandwich(str){
    //get back to this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var i=5; i<str.length-6; i++){
        var bread1 = str.substring(str[i-6], str[i-1]);
        if(bread1 == "bread"){
            var contentStart = i;
            break;
        }
    }

    for (var j=contentStart; j<str.length-6; j++){
        var bread2 = str.substring(str[j], str[j+6]);
        if(bread2 == "bread"){
            var contentEnd = j;
            break;
        }
    }
    var contents = str.substring(contentStart, contentEnd);
    return(contents);
}

function canBalance(array){

}











