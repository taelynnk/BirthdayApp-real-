var myButton = document.getElementById('birthdayButton');
function calculateAge(inputBirthday) {
    var today = new Date();
    var birthday = new Date(inputBirthday);
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
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
