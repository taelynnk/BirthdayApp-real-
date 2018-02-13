var myButton = document.getElementById('calculateAge');

function birthdayCountDown(date) {
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return ("There are " + days + " days until your birthday");
}

function incorrectBirthDate(date) {
    var birthInput = new Date(mm / dd / yyyy);
}
var birthInput = new Date(date);
if (birthInput !== date) {
    return "Sorry, but you did not enter a date in the correct format.";
} else {
    return myBirthday;
}

function calculateAge(inputBirthday) {
    var today = new Date();
    var birthday = new Date(inputBirthday);
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}

function displayCalculatedAge() {
    var input = document.getElementById('inputBirthday').value;
    var age = calculateAge(input);
    document.getElementById('age').textContent = "You are " + age + " years of age.";
}
myButton.addEventListener('click', displayCalculatedAge);
