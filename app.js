var nameUser = prompt("Enter Your Name: ");
var userValue1 = +prompt("Enter Your English Marks out of 50: ");
var userValue2 = +prompt("Enter Your Urdu Marks out of 50: ");
var userValue3 = +prompt("Enter Your Mathematics Marks out of 50: ");
var userValue4 = +prompt("Enter Your Computer Marks out of 50: ");
var userValue5 = +prompt("Enter Your Physics Marks out of 50: ");
var totalMarks = 250;
var obtainMarks = userValue1 + userValue2 + userValue3 +userValue4 + userValue5 ;
var percentage = (obtainMarks/totalMarks)* 100;
var grade;

if (percentage > 90 && percentage < 100) { 
    grade = "A+";
}
else if (percentage > 80 && percentage < 90){
    grade = "A";
}
else if (percentage > 70 && percentage < 80){
    grade = "B";
}
else if (percentage > 60 && percentage < 70){
    grade = "C";
}
else if (percentage > 50 && percentage < 60){
    grade = "D";
}
else {
    grade = ("F");
}
alert("Your Name: " + nameUser + "\nObtain Marks: " + obtainMarks + "\nPercentage: " + percentage + "\nGrade: " + grade);
