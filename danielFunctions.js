function BirthDateCheck() {
    var birthInput = "12";
    var d = new Date(birthInput);
if (birthInput.length < 10) {
    if (isNaN(d.getTime())) {
    } else {
        return "That isn't the correct format for a birth date.";
    }
  }
}
    button.addEventListener('click', BirthDateCheck);
