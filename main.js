// Get the username from the Telegram Web App API (limited support)
const usernameElement = document.getElementById('username');
const avatarElement = document.getElementById('avatar');

try {
  if (window.Telegram !== undefined) {
    window.Telegram.WebApp.ready().then(() => {
      const user = window.Telegram.WebApp.currentAccount;
      if (user && user.username) {
        usernameElement.textContent = user.username;
        avatarElement.textContent = user.username[0].toUpperCase(); // Extract first letter and uppercase
      } else {
        usernameElement.textContent = "User"; // Default fallback
        avatarElement.textContent = "U"; // Default avatar fallback
      }
    });
  } else {
    usernameElement.textContent = "User"; // Default fallback
    avatarElement.textContent = "U"; // Default avatar fallback
  }
} catch (error) {
  console.error("Error retrieving username:", error);
  // Display a user-friendly message to the user
  const errorMessage = document.createElement('p');
  errorMessage.textContent = "An error occurred while fetching your username. Please try again later.";
  errorMessage.style.color = "red"; // Optional styling for error message
  document.body.appendChild(errorMessage);
}

const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('mouseover', () => {
  buttonElement.style.backgroundColor = '#4CAF50'; // Change background color on hover
});

buttonElement.addEventListener('mouseout', () => {
  buttonElement.style.backgroundColor = '#2ECC71'; // Revert to original background color
});