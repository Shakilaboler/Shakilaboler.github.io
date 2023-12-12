const fetchUserData = async () => {
  try {
    const userResponse = await fetch(
      "https://api.github.com/users/shakilaboler"
    );
    if (!userResponse.ok) {
      throw new Error(`HTTP error! Status: ${userResponse.status}`);
    }

    const userData = await userResponse.json();
    updatePortfolio(userData);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    console.error("Response:", await userResponse.text());
  }
};

// Update portfolio with GitHub user data
const updatePortfolio = (userData) => {
  const avatar = document.getElementById("avatar");
  const bio = document.getElementById("bio");

  avatar.src = userData.avatar_url;
  bio.textContent = userData.bio;
};

// Call fetchUserData when the page loads
window.addEventListener("load", fetchUserData);
