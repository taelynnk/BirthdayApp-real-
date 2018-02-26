var button = document.getElementById('countdownbutton');

function birthdayCountDown(date) {
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return (days);
}

function displayBirthdayCountDown() {
    var input = document.getElementById('inputNum').value;
    var result = birthdayCountDown(date);
    return document.getElementById('prime').textContent = "This is how many days are left until your next birthday" + days;
    return ("There are " + days + " days until your birthday");
}


button.addEventListener('click', birthdayCountDown);
