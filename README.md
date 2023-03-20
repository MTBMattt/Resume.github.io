<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Builder</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Resume Builder</h1>
    <form id="resume-form">
        <label for="name">Full Name:</label>
        <input type="text" id="name" required>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <br>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" required>
        <br>

        <label for="address">Address:</label>
        <input type="text" id="address" required>
        <br>

        <label for="work-experience">Work Experience:</label>
        <textarea id="work-experience" rows="5" required></textarea>
        <br>

        <label for="education">Education:</label>
        <textarea id="education" rows="5" required></textarea>
        <br>

        <label for="skills">Skills:</label>
        <textarea id="skills" rows="5" required></textarea>
        <br>

        <button type="submit">Generate Resume</button>
    </form>

    <div id="resume-output" style="display:none;">
        <h2>Generated Resume</h2>
        <pre id="resume-text"></pre>
    </div>

    <script src="script.js"></script>
</body>
</html>
