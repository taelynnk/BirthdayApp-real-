<<<<<<< HEAD
var button = document.getElementById('countdownbutton');
=======
var myButton = document.getElementById('calculateAge');
>>>>>>> origin/master

function birthdayCountDown(date) {
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

<<<<<<< HEAD
    return (days);
}

function displayBirthdayCountDown() {
    var input = document.getElementById('inputNum').value;
    var result = birthdayCountDown(date);
    return document.getElementById('prime').textContent = "This is how many days are left until your next birthday" + days;
=======
    return ("There are " + days + " days until your birthday");
}

function incorrectBirthDate(inputBirthday) {
    var birthInput = new Date(mm / dd / yyyy);
if (birthInput !== date) {
    return "Sorry, but you did not enter a date in the correct format.";
} else {
    return myBirthday;
  }
}
function calculateAge(inputBirthday) {
    var today = new Date();
    var birthday = new Date(inputBirthday);
    return Math.floor((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
}
>>>>>>> origin/master

function displayCalculatedAge() {
    var input = document.getElementById('inputBirthday').value;
    var age = calculateAge(input);
    document.getElementById('age').textContent = "You are " + age + " years of age.";
}
<<<<<<< HEAD


button.addEventListener('click', birthdayCountDown);
=======
myButton.addEventListener('click', displayCalculatedAge);
>>>>>>> origin/master
