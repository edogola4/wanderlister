// Select all "Book Now" buttons
const bookNowButtons = document.querySelectorAll('.book-now-btn');

// Function to handle the booking action
function handleBooking(event) {
    event.preventDefault(); // Prevent the default link action

    // Show a loading message while processing the booking
    const loadingMessage = "Processing your booking...";
    const button = event.target;
    button.textContent = loadingMessage;

    // Simulate a booking request delay
    setTimeout(() => {
        // Random success/failure condition
        const isSuccess = Math.random() > 0.5;

        // Display appropriate success or failure message
        if (isSuccess) {
            alert("Booking successful! Thank you for choosing our tour.");
        } else {
            alert("Booking failed. Please check your connection and try again.");
        }

        // Reset button text
        button.textContent = "Book Now";
    }, 1000); // 1-second delay for simulation
}

// Add click event listener to each "Book Now" button
bookNowButtons.forEach(button => {
    button.addEventListener('click', handleBooking);
});
