var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var gradDate = document.getElementById('gradDate').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var responsibilities = document.getElementById('responsibilities').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        \n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institution:</strong> ").concat(institution, "</p>\n        <p><strong>Graduation Date:</strong> ").concat(gradDate, "</p>\n        \n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Duration:</strong> ").concat(duration, "</p>\n        <p><strong>Responsibilities:</strong> ").concat(responsibilities, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills.map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n      ");
    }
});
