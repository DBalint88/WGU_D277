const emailField = document.getElementById("email-field")
const verifyField = document.getElementById("verify-field")
const feedbackSpan = document.getElementById("feedback-span")
const button = document.getElementById("submit-button")

button.addEventListener("click", function(event) {
    if (emailField.value != verifyField.value) {
        console.log("yooo")
        feedbackSpan.textContent = "Emails must match!"
    } else {
        feedbackSpan.textContent = ""
    }
    event.preventDefault()
    console.log("heyyy")
    
});

