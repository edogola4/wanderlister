// Select all "Book Now" buttons
const bookNowButtons = document.querySelectorAll('.book-now-btn');
const responseContainer = document.getElementById('response-container');
const responseMessage = document.getElementById('response-message');
const responseImage = document.getElementById('response-image');

// Array to keep track of booking attempts
let bookingLog = [];

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
        const bookingStatus = isSuccess ? "Success" : "Failure";

        // Log the booking attempt
        bookingLog.push({
            buttonId: button.id,
            status: bookingStatus,
            timestamp: new Date().toLocaleString()
        });

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

        // Display booking log in the console using array iteration
        console.log("Booking Attempts:");
        bookingLog.forEach((log, index) => {
            console.log(`${index + 1}. Button ID: ${log.buttonId} - Status: ${log.status} - Time: ${log.timestamp}`);
        });
    }, 1000); // 1-second delay for simulation
}

// Add click event listener to each "Book Now" button
bookNowButtons.forEach(button => {
    button.addEventListener('click', handleBooking);
});



// Explanation for the code above:
// Booking Log Array: The bookingLog array stores each booking attempt, including button ID, status, and timestamp.
// forEach Iteration: After each booking attempt, the array is iterated with forEach to display booking history in the console. This uses array iteration to log each attempt.
// Console Logging: Each entry in bookingLog is printed with details like the button ID, status, and timestamp 