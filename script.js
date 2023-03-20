document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const workExperience = document.getElementById('work-experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const resumeText = `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${address}

Work Experience:
${workExperience}

Education:
${education}

Skills:
${skills}
`;

    document.getElementById('resume-text').innerText = resumeText;
    document.getElementById('resume-output').style.display = 'block';
});
