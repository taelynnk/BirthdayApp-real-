var myButton = document.getElementById('birthdayButton');
function calculateAge(inputBirthday) {
    var today = new Date();
    var birthday = new Date(inputBirthday);
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}


function findZodiac(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate() + 1;
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




function countdownbutton(date) {
    var today = new Date();
    var myBirthday = new Date(date) ;
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() );
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    return (days);
}

function displayAllOutputs() {
    var input = document.getElementById('inputBirthday').value;
    if (BirthDateCheck(input)==false) {
        document.getElementById('inputBirthday').textContent = "Please enter your birthday in the mm/dd/yyyy format."
    } else{
    var date = new Date (input);
    var age = calculateAge(date);
    var countDown = countdownbutton(date);
    var zodiacSign = findZodiac(date);
    document.getElementById('allOutputs').textContent = "You are " + age + " years old." , "<hr/>", "There are " + countDown + "day(s) until your next birthday." , "<hr/>" , "Your zodiac sign is " + zodiacSign + ".";

    }
}
myButton.addEventListener('click', displayAllOutputs);


