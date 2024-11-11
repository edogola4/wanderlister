// Typed.js effect for the travel themes
var typed = new Typed(".typing-text", {
    strings: ["pristine beaches", "serene mountains", "wild safaris", "vibrant cities", "ancient landmarks", "exotic cuisines"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 500,
});

// <!-- Loading counter overlay -->
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const overlay = document.getElementById("loading-overlay");
    const mainContent = document.getElementById("main-content");
    let count = 0;
  
    const interval = setInterval(() => {
      count += 10;
      counterElement.textContent = count;
  
      if (count >= 100) {
        clearInterval(interval);
        overlay.classList.add("hidden");       // Hide the counter overlay
        mainContent.classList.remove("hidden"); // Show main content
      }
    }, 500); // Update count every 0.5 seconds
  });

  