const perDay = 100.000;
document.getElementById('btnEnter').onclick = function(){
    var day = document.getElementById('numOfDay').value;
    var result = day*perDay;
    document.getElementById('result').innerHTML = "Your total salary for " + day + " day is " + result + ",000";
}

// Bài 2
document.getElementById('btnCal').onclick = function(){
    var a = document.getElementById('numOne').value*1;
    var b = document.getElementById('numTwo').value*1;
    var c = document.getElementById('numThree').value*1;
    var d = document.getElementById('numFour').value*1;
    var e = document.getElementById('numFive').value*1;

    var result2 = (a+b+c+d+e)/5;

    document.getElementById('averageResult').innerHTML = `The average number is ${result2}`;
}

// Bài 3
const usdRate = 23500;
document.getElementById('btnExchange').onclick = function(){
    var usdAmount = document.getElementById('usdAmount').value*1;
    var result3 = usdAmount * usdRate;

    document.getElementById('exchangeResult').innerHTML = `${result3.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })}`
}

// Bài 4
document.getElementById('btnCalRec').onclick = function(){
    var length = document.getElementById('lengthRec').value*1;
    var width = document.getElementById('widthRec').value*1;
    var square = length * width;
    var perimeter = (length + width) / 2;
    document.getElementById('recResult').innerHTML = `The square is ${square} and the Perimeter is ${perimeter}`
}
// bài 5
document.getElementById('btnCalSum').onclick = function(){
    var num = document.getElementById('num').value*1;
    var unit = num % 10;
    var dozen = num / 10;
    var sumDigit = unit + Math.floor(dozen);
    document.getElementById('sumResult').innerHTML = `The sum of digit is ${sumDigit}`
}


