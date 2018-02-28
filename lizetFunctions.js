var button = document.getElementById('countdownbutton');

function birthdayCountDown(inputdate) {
    var today = new Date();
    var myBirthday = new Date(inputdate);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return (days);
}

function displayBirthdayCountDown() {
    var input = document.getElementById('inputdate').value;
    var countdown = birthdayCountDown(date);
    return document.getElementById('countdown').textContent = "Days left until your next birthday" + days;
}

button.getEventListener('click', displayBirthdayCountDown);
