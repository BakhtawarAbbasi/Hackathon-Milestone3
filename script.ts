document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const gradDate = (document.getElementById('gradDate') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const responsibilities = (document.getElementById('responsibilities') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
    // Generate resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Graduation Date:</strong> ${gradDate}</p>
        
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Responsibilities:</strong> ${responsibilities}</p>
        
        <h3>Skills</h3>
        <p>${skills.map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
      `;
    }
  });
  