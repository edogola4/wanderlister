// Select all "Book Now" buttons
const bookNowButtons = document.querySelectorAll('.book-now-btn');
const responseContainer = document.getElementById('response-container');
const responseMessage = document.getElementById('response-message');
const responseImage = document.getElementById('response-image');

// Function to handle the booking action
function handleBooking(event) {
    event.preventDefault(); // Prevent the default link action

    // Show a loading message while processing the booking
    const loadingMessage = "Processing your booking...";
    const button = event.target;
    button.textContent = loadingMessage;

    // Hide previous response message and image
    responseContainer.style.display = 'none';
    responseImage.style.display = 'none';

    // Simulate a booking request delay
    setTimeout(() => {
        // Random success/failure condition
        const isSuccess = Math.random() > 0.5;

        // Display appropriate success or failure message and image
        if (isSuccess) {
            responseMessage.textContent = "Booking successful! Thank you for choosing Wanderlister.";
            responseImage.src = "./gallery/success-image.jpg"; // Replace with actual success image URL
            responseImage.alt = "Success";
        } else {
            responseMessage.textContent = "Booking failed. No available slots at the moment. Please try again later.";
            responseImage.src = "./gallery/failure-image.jpg"; // Replace with actual failure image URL
            responseImage.alt = "Failure";
        }

        // Show the response container and image
        responseContainer.style.display = 'block';
        responseImage.style.display = 'block';

        // Reset button text
        button.textContent = "Book Now";
    }, 1000); // 1-second delay for simulation
}

// Add click event listener to each "Book Now" button
bookNowButtons.forEach(button => {
    button.addEventListener('click', handleBooking);
});
