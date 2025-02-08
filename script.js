// View Project button click function
function viewProject(projectName) {
    alert(`You are viewing details for: ${projectName}`);
}

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for contacting me, ${name}! I will get back to you soon.`);
    } else {
        alert("Please fill in all fields.");
    }
});
