var myButton = document.getElementById('calculateAge');
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
