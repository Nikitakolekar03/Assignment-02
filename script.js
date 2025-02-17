document.getElementById("validateBtn").addEventListener("click", function () {
    let fullName = document.getElementById("fullName").value.trim();
    let mobileNo = document.getElementById("mobileNo").value.trim();
    let panNo = document.getElementById("panNo").value.trim().toUpperCase();
    let addrNo = document.getElementById("addrNo").value.trim();
    let dob = document.getElementById("dob").value;

    let nameParts = fullName.split(" ");
    let firstName = nameParts[0] || "Not Provided";
    let middleName = nameParts[1] || "Not Provided";
    let lastName = nameParts[2] || "Not Provided";

    let mobileValid = mobileNo.length === 10 && 
                      (mobileNo[0] === "6" || mobileNo[0] === "7" || mobileNo[0] === "8" || mobileNo[0] === "9");

    let panValid = panNo.length === 10;
    let aadhaarValid = addrNo.length === 12;
    let dobResult = dob ? dob : "Not Provided";

    let marks = [...document.getElementsByClassName("subject-marks")].map(input => parseFloat(input.value) || 0);
    let percentage = marks.length === 5 ? (marks.reduce((sum, mark) => sum + mark, 0) / 5).toFixed(2) + "%" : "Enter 5 Subject Marks";

    document.getElementById("firstName").textContent = "First Name: " + firstName;
    document.getElementById("middleName").textContent = "Middle Name: " + middleName;
    document.getElementById("lastName").textContent = "Last Name: " + lastName;
    document.getElementById("mobileResult").textContent = mobileValid ? "Valid Mobile Number" : "Invalid Mobile Number";
    document.getElementById("panResult").textContent = panValid ? "Valid PAN Number" : "Invalid PAN Number";
    document.getElementById("addrResult").textContent = aadhaarValid ? "Valid Aadhaar Number" : "Invalid Aadhaar Number";
    document.getElementById("dobResult").textContent = "Date of Birth: " + dobResult;
    document.getElementById("percentage").textContent = "Percentage: " + percentage;
});