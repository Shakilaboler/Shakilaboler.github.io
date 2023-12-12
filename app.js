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

const updatePortfolio = (userData) => {
  const avatar = document.getElementById("avatar");
  const bio = document.getElementById("bio");

  avatar.src = userData.avatar_url;
  bio.textContent = userData.bio;
};

window.addEventListener("load", fetchUserData);
