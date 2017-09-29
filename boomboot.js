function tester() {

    document.getElementById("output").innerHTML = getSandwich("breadjambread");

}



function sleep_in(weekday,vacation) {
    return(weekday == false || vacation == true);
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == true){
        return(b_smile == true);
    }
    if(a_smile == false) {
        return(b_smile == false);
    }
    return false;
}

function string_times(string,int){
    var multipliedString = "";
    for(var i = 0; i<int; i++){
        multipliedString += string;
    }
    return(multipliedString);
}

function front_times(string,n){
    var front = string.substring(0,3);
    var multipliedFront = "";
    for(var i = 0; i<n; i++) {
        multipliedFront += front;
    }
    return(multipliedFront);
}

function string_bits(string){
    var bitString = "";
    for(var i=0; i<string.length; i+=2){
        bitString += string[i]
    }
    return(bitString);
}

function caughtSpeeding(speed, birthday){
    if(birthday == false){
        if(speed <= 60){
            return(0);
        }
        if(60 < speed && speed <=80) {
            return(1);
        }
        if(speed > 80){
            return(2);
        }
    }
    if(birthday == true){
        if(speed <= 65){
            return(0);
        }
        if(65 < speed && speed <=85) {
            return(1);
        }
        if(85 < speed){
            return(2);
        }
    }
}

function fizz_buzz(int){
    if(int % 3 == 0 && int % 5 == 0) {
        return ("FizzBuzz");
    }
    if (int % 3 == 0) {
        return ("Fizz");
    }
    if (int % 5 == 0) {
        return ("Buzz");
    }
    return(int + "!");
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return(0);
    }
    if(tea / 2 >= candy || candy / 2 >= tea){
        return(2);
    }
    if(tea >= 5 && candy >= 5){
        return(1);
    }
}

function blackjack(int1, int2){
    if(int1<= 21 && int2 <= 21){
        return Math.max(int1, int2);
    }
    if(int1 <= 21){
        return int1;
    }
    if(int2<= 21) {
        return int2;
    }
    if(int1 >21 && int2>21){
        return 0;
    }
}

function loneSum(a,b,c) {
    if (a == b && b == c) {
        return(0);
    }
    if (a == b){
        return (c);
    }
    if(b==c){
        return(a);
    }if(a==c){
        return(b);
    }
    if(a!=b && a!=c && b!= c){
        return(a + b + c);
    }
}

function firstLast6(ints){
    var first = ints[0];
    var last = ints[ints.length-1];
    return(first ==6 || last == 6);


}

function has23(array){
    var first = array[0];
    var second = array[1];
    return(first == 2 || second == 2 || first == 3 || second == 3);

}

function fix23(array){
    for(var i=0; i<array.length; i++) {
        if (array[i] == 2 && array [i + 1] == 3) {
            array[i + 1] = 0;
        }
    }
    return(array);
}

function countYZ(string){
    var count = 0;
    for(var i=0; i<string.length; i++){
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
    return(string1.substring(string1.length - string2.length, string1.length) == string2
    || string2.substring(string2.length - string1.length, string2.length) == string1);
}

function starOut(str){
    var newStr = "";
    for(var i=0; i<str.length; i++){
        if(str[i] != "*" && str[i + 1] == "*") {
        }else{
            newStr += str[i];
        }
    }
    var newStr2 = "";
    for(var j=0; j<newStr.length; j++) {
        if (newStr[j] != "*" && newStr[j - 1] == "*") {
        }else{
            newStr2 += newStr[j];
        }
    }
    var newStr3 = "";
    for(var k=0; k<newStr2.length; k++) {
        if(newStr2[k] == "*"){
        }else{
            newStr3 += newStr2[k];
        }
    }
    return(newStr3);
}


function getSandwich(str){
    //get back to this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var contentStart = 0;
    var bread1;
    while(contentStart<str.length){
        bread1 = str.substring(contentStart-5, contentStart);
        if(bread1 == "bread") {
            break;
        }
        contentStart++;
    }
    if(contentStart == str.length){
        return("");
    }
    else {
        var contentEnd = str.length;
        var bread2;
        while (contentEnd >= 0) {
            bread2 = str.substring(contentEnd, contentEnd + 5);
            if (bread2 == "bread") {
                break;
            }
            contentEnd--;
        }
        if (contentEnd == 0) {
            return ("");
        }

        //top:fix this!
        if(str.indexOf('bread') == str.lastIndexOf('bread')){
            return("");
        //bottom: fix this
        }else{
            var contents = str.substring(contentStart, contentEnd);
            return (contents);
        }

    }
}

function canBalance(array){
    var frontMark = 0;
    var frontSum = array[frontMark];
    var backMark = array.length-1;
    var backSum = array[backMark];
    while(frontMark < backMark){
        if(frontSum == backSum && frontMark == backMark -1){
            return true;
        }
        if(frontSum <= backSum){
            frontMark ++;
            frontSum += array[frontMark]
        }
        if(frontSum == backSum && frontMark == backMark -1){
            return true;
        }
        if(backSum <= frontSum){
            backMark --;
            backSum += array[backMark];
        }
    }
    return false;
}

function countClumps(array){
    var clumps = 0;
    for(var i=1; i<array.length; i++){
        if(array[i] == array[i-1] && array[i] != array[i-2]){
            clumps ++;
        }
    }
    return clumps;
}

function evenlySpaced(a,b,c) {
    var small;
    var med;
    var large;
    if (a <= b) {
        if (b <= c) {
            small = a;
            med = b;
            large = c;
        } else {
            if (a <= c) {
                small = a;
                med = c;
                large = b;
            }
            else {
                small = c;
                med = a;
                large = b;
            }
        }
    }
    if (b <= a) {
        if (a <= c) {
            small = b;
            med = a;
            large = c;
        } else {
            if (b <= c) {
                small = b;
                med = c;
                large = a;
            }
            else {
                small = c;
                med = b;
                large = a;
            }
        }
    }
    return (med - small == large - med);
}














