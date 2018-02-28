var button = document.getElementById('countdownbutton');

function countdownbutton(inputdate) {
    var today = new Date();
    var myBirthday = new Date(inputdate) ;
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() );
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    return (days);
}

function displaycountdownbutton() {
    var input = document.getElementById('inputdate').value;
    var countdown = countdownbutton(input);
    return document.getElementById('countdown').textContent = countdown + " day(s) until your next birthday!";
}

button.addEventListener('click', displaycountdownbutton);

var button2 = document.getElementById('findZodiac');

function findZodiac(inputZodiac) {
    this.birthday = new Date(inputZodiac);

    this.getSign = function () {
        var sign = new Date(birthday);
        if ((sign.getMonth() == 2 && sign.getDate() >= 21 || sign.getMonth() == 3 && sign.getDate() <= 19)) {
            return "Aries";
        } else if ((sign.getMonth() == 3 && sign.getDate() >= 20 || sign.getMonth() == 4 && sign.getDate() <= 20)) {
            return "Taurus";
        } else if ((sign.getMonth() == 4 && sign.getDate() >= 21 || sign.getMonth() == 5 && sign.getDate() <= 20)) {
            return "Gemini";
        } else if ((sign.getMonth() == 5 && sign.getDate() >= 21 || sign.getMonth() == 6 && sign.getDate() <= 22)) {
            return "Cancer";
        } else if ((sign.getMonth() == 6 && sign.getDate() >= 23 || sign.getMonth() == 7 && sign.getDate() <= 22)) {
            return "Leo";
        } else if ((sign.getMonth() == 7 && sign.getDate() >= 23 || sign.getMonth() == 8 && sign.getDate() <= 22)) {
            return "Virgo";
        } else if ((sign.getMonth() == 8 && sign.getDate() >= 23 || sign.getMonth() == 9 && sign.getDate() <= 22)) {
            return "Libra";
        } else if ((sign.getMonth() == 9 && sign.getDate() >= 23 || sign.getMonth() == 10 && sign.getDate() <= 21)) {
            return "Scorpio";
        } else if ((sign.getMonth() == 10 && sign.getDate() >= 22 || sign.getMonth() == 11 && sign.getDate() <= 21)) {
            return "Sagittarius";
        } else if ((sign.getMonth() == 11 && sign.getDate() >= 22 || sign.getMonth() == 0 && sign.getDate() <= 19)) {
            return "Capricorn";
        } else if ((sign.getMonth() == 0 && sign.getDate() >= 20 || sign.getMonth() == 1 && sign.getDate() <= 18)) {
            return "Aquarius";
        } else if ((sign.getMonth() == 1 && sign.getDate() >= 19 || sign.getMonth() == 2 && sign.getDate() <= 20)) {
            return "Pisces";
        }

    }
}

    function displayfindZodiac () {
        var input = document.getElementById('inputZodiac').value;
        var zodiacSign = findZodiac(input);
        return document.getElementById('zodiacSign').textContent = zodiacSign;

    }

    button.addEventListener('click', displayfindZodiac);
