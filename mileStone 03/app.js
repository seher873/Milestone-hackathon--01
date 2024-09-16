function generateResume() {
    var form = document.getElementById('resumeForm');
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('workExperience').value,
        skills: document.getElementById('skills').value
    };
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = "\n           <h1>".concat(resumeData.name, "</h1>\n           <p>Email: ").concat(resumeData.email, "</p>\n           <p>Phone: ").concat(resumeData.phone, "</p>\n           <p>Address: ").concat(resumeData.address, "</p>\n           <h2>Education</h2>\n           <p>").concat(resumeData.education, "</p>\n           <h2>Work Experience</h2>\n           <p>").concat(resumeData.workExperience, "</p>\n           <h2>Skills</h2>\n           <p>").concat(resumeData.skills, "</p>\n       ");
}
