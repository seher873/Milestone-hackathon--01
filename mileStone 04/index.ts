interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

interface Education {
    school: string;
    degree: string;
    gradYear: number;
}

interface WorkExperience {
    company: string;
    jobTitle: string;
    yearsExp: number;
}

interface Resume {
    personalInfo: PersonalInfo;
    education: Education;
    workExperience: WorkExperience;
    skills: string[];
}

let resumeData: Resume;

document.getElementById("generateResume")?.addEventListener("click", () => {
    // Capture user input
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const gradYear = parseInt((document.getElementById("gradYear") as HTMLInputElement).value);

    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const yearsExp = parseInt((document.getElementById("yearsExp") as HTMLInputElement).value);

    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;
    const skills = skillsInput.split(",").map(skill => skill.trim());

    // Create a resume object
    resumeData = {
        personalInfo: { name, email, phone },
        education: { school, degree, gradYear },
        workExperience: { company, jobTitle, yearsExp },
        skills
    };

    // Display the resume
    displayResume(resumeData);
});

function displayResume(resume: Resume) {
    const resumeDiv = document.getElementById("resume")!;
    resumeDiv.innerHTML = `
        <h2 id="nameSection">${resume.personalInfo.name}</h2>
        <p><strong>Email:</strong> <span id="emailSection">${resume.personalInfo.email}</span></p>
        <p><strong>Phone:</strong> <span id="phoneSection">${resume.personalInfo.phone}</span></p>
        
        <h3>Education</h3>
        <p><strong>School:</strong> <span id="schoolSection">${resume.education.school}</span></p>
        <p><strong>Degree:</strong> <span id="degreeSection">${resume.education.degree}</span></p>
        <p><strong>Graduation Year:</strong> <span id="gradYearSection">${resume.education.gradYear}</span></p>
        
        <h3>Work Experience</h3>
        <p><strong>Company:</strong> <span id="companySection">${resume.workExperience.company}</span></p>
        <p><strong>Job Title:</strong> <span id="jobTitleSection">${resume.workExperience.jobTitle}</span></p>
        <p><strong>Years of Experience:</strong> <span id="yearsExpSection">${resume.workExperience.yearsExp}</span></p>
        
        <h3>Skills</h3>
        <p><span id="skillsSection">${resume.skills.join(", ")}</span></p>
    `;

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

function makeEditable(sectionId: string, objectKey: keyof Resume, propertyKey: keyof PersonalInfo | keyof Education | keyof WorkExperience | null, isSkills = false) {

    const section = document.getElementById(sectionId)!;


    section.addEventListener("click", () => {
    
        if (section.tagName === "INPUT" || section.tagName === "TEXTAREA") return; // Already in edit mode
    })

        const currentText = section.textContent!;
        const inputElement = isSkills ? document.createElement("textarea") : document.createElement("input");
        inputElement.value = currentText;
        section.replaceWith(inputElement); 
        inputElement.addEventListener("blur", () => {
            const newValue = inputElement.value;
        
            if (isSkills) {
                resumeData.skills = newValue.split(",").map(skill => skill.trim());
            } else if (propertyKey) {
                (resumeData[objectKey] as any)[propertyKey] = newValue;
            
            }
        })
}