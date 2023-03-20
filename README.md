# Resume.github.io
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Resume Generator</title>
</head>
<body>
  <h1>Resume Generator</h1>
  <form id="work-experience-form">
    <h3>Personal Information</h3>
    <label for="name">Full Name:</label>
    <input type="text" id="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <br>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" required>
    <br>
    <h3>Work Experience</h3>
    <label for="company">Company:</label>
    <input type="text" id="company" required>
    <br>
    <label for="position">Position:</label>
    <input type="text" id="position" required>
    <br>
    <label for="duration">Duration:</label>
    <input type="text" id="duration" required>
    <br>
    <button type="submit">Add Work Experience</button>
  </form>

  <h2>Resume Preview</h2>
  <div id="resume">
    <h3 id="resume-name"></h3>
    <p id="resume-contact"></p>
    <hr>
    <h4>Work Experience</h4>
    <ul id="work-experience-list">
    </ul>
  </div>
  <script src="scripts.js"></script>
</body>
</html>
