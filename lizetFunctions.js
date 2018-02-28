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
