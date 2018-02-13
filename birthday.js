function birthdayCountDown(date) {
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return ("There are " + days+ " days until your birthday");
}

function incorrectBirthDate(date) {
    var birthInput = new Date(mm/dd/yyyy);
    if (birthInput === mmddyyy) {
         return "Sorry, but you did not enter a date in the correct format.";
    } else if (birthInput === mm-dd-yyyy) {
        return "Sorry, but you did not enter a date in the correct format.";
    } else (birthInput === mm/dd/yyyy) {
        return myBirthday;
    }
}
