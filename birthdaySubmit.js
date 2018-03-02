var myButton = document.getElementById('birthdayButton');
myButton.addEventListener('click', displayAllOutputs);


function calculateAge(inputBirthday) {
    var today = new Date();
    var birthday = new Date(inputBirthday);
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}


function findZodiac(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate() + 1;
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    }
}



    function countdownbutton(date) {
        var today = new Date();
        var myBirthday = new Date(date);
        myBirthday.setFullYear(today.getFullYear());
        if (today.getTime() > myBirthday.getTime()) {
            myBirthday.setFullYear(today.getFullYear());
        }
        var diff = myBirthday.getTime() - today.getTime();
        var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

        return (days);
    }

    function displayAllOutputs() {
        var input = document.getElementById('inputBirthday').value;
        if (BirthDateCheck(input) == false) {
            document.getElementById('inputBirthday').value = "mm/dd/yyyy"
        } else {
            var date = new Date(input);
            var age = calculateAge(date);
            var countDown = countdownbutton(date);
            var zodiacSign = findZodiac(date);
            document.getElementById('allOutputs').textContent = "You are " + age + " years old. There are " + countDown + " day(s) until your next birthday. Your zodiac sign is " + zodiacSign + ".";

        }
    }

function BirthDateCheck(input) {
if (input.length == 10) {
    var d = new Date(input);
    if (isNaN(d.getTime())) {
        return false;
    } else {
        return true;
    }
  }
    return false;
}
  //***  var format = document.getElementById("inputBirthday").value;
   // var check1 = format.substring(2, 3);
    //var check2 = format.substring(5, 6);
    //if ((check1 == "/") && (check2 =="/") && (format.length == 10)) //


