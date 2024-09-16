var _a;
var resumeData;
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // Capture user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var gradYear = parseInt(document.getElementById("gradYear").value);
    var company = document.getElementById("company").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var yearsExp = parseInt(document.getElementById("yearsExp").value);
    var skillsInput = document.getElementById("skills").value;
    var skills = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    // Create a resume object
    resumeData = {
        personalInfo: { name: name, email: email, phone: phone },
        education: { school: school, degree: degree, gradYear: gradYear },
        workExperience: { company: company, jobTitle: jobTitle, yearsExp: yearsExp },
        skills: skills
    };
    // Display the resume
    displayResume(resumeData);
});
function displayResume(resume) {
    var resumeDiv = document.getElementById("resume");
    resumeDiv.innerHTML = "\n        <h2 id=\"nameSection\">".concat(resume.personalInfo.name, "</h2>\n        <p><strong>Email:</strong> <span id=\"emailSection\">").concat(resume.personalInfo.email, "</span></p>\n        <p><strong>Phone:</strong> <span id=\"phoneSection\">").concat(resume.personalInfo.phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p><strong>School:</strong> <span id=\"schoolSection\">").concat(resume.education.school, "</span></p>\n        <p><strong>Degree:</strong> <span id=\"degreeSection\">").concat(resume.education.degree, "</span></p>\n        <p><strong>Graduation Year:</strong> <span id=\"gradYearSection\">").concat(resume.education.gradYear, "</span></p>\n        \n        <h3>Work Experience</h3>\n        <p><strong>Company:</strong> <span id=\"companySection\">").concat(resume.workExperience.company, "</span></p>\n        <p><strong>Job Title:</strong> <span id=\"jobTitleSection\">").concat(resume.workExperience.jobTitle, "</span></p>\n        <p><strong>Years of Experience:</strong> <span id=\"yearsExpSection\">").concat(resume.workExperience.yearsExp, "</span></p>\n        \n        <h3>Skills</h3>\n        <p><span id=\"skillsSection\">").concat(resume.skills.join(", "), "</span></p>\n    ");
    // Add event listeners to make the sections editable
    makeEditable("nameSection", "personalInfo", "name");
    makeEditable("emailSection", "personalInfo", "email");
    makeEditable("phoneSection", "personalInfo", "phone");
    makeEditable("schoolSection", "education", "school");
    makeEditable("degreeSection", "education", "degree");
    makeEditable("gradYearSection", "education", "gradYear");
    makeEditable("companySection", "workExperience", "company");
    makeEditable("jobTitleSection", "workExperience", "jobTitle");
    makeEditable("yearsExpSection", "workExperience", "yearsExp");
    makeEditable("skillsSection", "skills", null, true); // Special handling for skills as an array
}
function makeEditable(sectionId, objectKey, propertyKey, isSkills) {
    if (isSkills === void 0) { isSkills = false; }
    var section = document.getElementById(sectionId);
    section.addEventListener("click", function () {
        if (section.tagName === "INPUT" || section.tagName === "TEXTAREA")
            return; // Already in edit mode
        var currentText = section.textContent;
        var inputElement = isSkills ? document.createElement("textarea") : document.createElement("input");
        inputElement.value = currentText;
        section.replaceWith(inputElement);
        inputElement.addEventListener("blur", function () {
            var newValue = inputElement.value;
            if (isSkills) {
                resumeData.skills = newValue.split(",").map(function (skill) { return skill.trim(); });
            }
            else if (propertyKey) {
                resumeData[objectKey][propertyKey] = newValue;
            }
            // Update the display and reattach the event listener
            inputElement.replaceWith(section);
            section.textContent = newValue;
            makeEditable(sectionId, objectKey, propertyKey, isSkills);
        });
        inputElement.focus();
    });
}
