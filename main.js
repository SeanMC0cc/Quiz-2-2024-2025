function getRating() {
    let ict = parseFloat(document.getElementById("ictGrade").value);
    let math = parseFloat(document.getElementById("mathGrade").value);
    let science = parseFloat(document.getElementById("scienceGrade").value);
    if (isNaN(ict) || isNaN(math) || isNaN(science)) {
      alert("Please enter all grades.");
      return;
    }
    let average = (ict + math + science) / 3;
    let rating = "";
    if (average >= 94) {
      rating = "Excellent";
    } else if (average >= 87) {
      rating = "Above Satisfactory";
    } else if (average >= 80) {
      rating = "Satisfactory";
    } else if (average >= 75) {
      rating = "Needs Improvement";
    } else if (average >= 70) {
      rating = "Poor";
    } else {
      rating = "Failing";
    }
    document.getElementById("outputArea").innerHTML = `
      <h4>Average Grade: ${average.toFixed(2)}</h4>
      <h5>Rating: <span class="text-primary">${rating}</span></h5>
    `;
}