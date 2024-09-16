// app.ts
interface ResumeData {
       name: string;
       email: string;
       phone: string;
       address: string;
       education: string;
       workExperience: string;
       skills: string;
   }
   
   function generateResume(): void {
       const form = document.getElementById('resumeForm') as HTMLFormElement;
   
       const resumeData: ResumeData = {
           name: (document.getElementById('name') as HTMLInputElement).value,
           email: (document.getElementById('email') as HTMLInputElement).value,
           phone: (document.getElementById('phone') as HTMLInputElement).value,
           address: (document.getElementById('address') as HTMLInputElement).value,
           education: (document.getElementById('education') as HTMLTextAreaElement).value,
           workExperience: (document.getElementById('workExperience') as HTMLTextAreaElement).value,
           skills: (document.getElementById('skills') as HTMLTextAreaElement).value
       };
   
       const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
       resumeOutput.innerHTML = `
           <h1>${resumeData.name}</h1>
           <p>Email: ${resumeData.email}</p>
           <p>Phone: ${resumeData.phone}</p>
           <p>Address: ${resumeData.address}</p>
           <h2>Education</h2>
           <p>${resumeData.education}</p>
           <h2>Work Experience</h2>
           <p>${resumeData.workExperience}</p>
           <h2>Skills</h2>
           <p>${resumeData.skills}</p>
       `;
   }
   