// Handle "Join Us" Button Click
function joinMembership() {
    localStorage.setItem("isMember", "true");
  
    const ctaButton = document.querySelector(".cta-button");
    const messageBox = document.querySelector(".welcome-message");
  
    // Update button and display avatar with membership status
    displayMembershipStatus(ctaButton, messageBox, "Thank you for joining! You’re now a member.");
  
    // Hide message after a few seconds
    setTimeout(() => {
      messageBox.classList.remove("show");
    }, 5000);
  }
  
  // Function to display membership status with avatar
  function displayMembershipStatus(button, messageBox, messageText) {
    button.textContent = "Karibu Our Member! 😊";
    button.classList.add("disabled");
  
    // Set up welcome message with avatar
    messageBox.innerHTML = `
      <div class="avatar">
        <img src="path/to/avatar.png" alt="Member Avatar" class="avatar-img">
      </div>
      <div class="message-text">${messageText}</div>
    `;
    messageBox.classList.add("show");
  }
  