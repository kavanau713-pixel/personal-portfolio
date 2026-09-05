console.log("Portfolio website loaded successfully!");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(".submit-btn");
    const originalButtonText = submitButton.textContent;

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        const response = await fetch("https://personal-portfolio-xzr1.onrender.com/api/contact", {
     
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            contactForm.reset();
        } else {
            alert(data.message || "Unable to send your message.");
        }
    } catch (error) {
        alert("Server connection failed. Make sure the backend is running.");
    } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});