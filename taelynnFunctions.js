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
