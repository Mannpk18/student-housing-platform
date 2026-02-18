document.addEventListener("DOMContentLoaded", () => {
  console.log("Group Collaboration page loaded.");

  // RSVP Button Interaction
  document.querySelectorAll(".bi-check-circle-fill, .bi-x-circle-fill").forEach(icon => {
    icon.addEventListener("click", () => {
      alert("RSVP status updated for viewing!");
    });
  });

  // Add roommate interaction
  document.querySelectorAll(".roommate-photo").forEach(photo => {
    photo.addEventListener("click", () => {
      alert("Invite or add a new roommate feature coming soon!");
    });
  });

  // ============================
  // Profile Dropdown Toggle
  // ============================
  const profileIcon = document.getElementById("profileIcon");
  const profileMenu = document.getElementById("profileMenu");

  if (profileIcon && profileMenu) {
    // Toggle menu when icon is clicked
    profileIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      profileMenu.style.display =
        profileMenu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!profileMenu.contains(event.target)) {
        profileMenu.style.display = "none";
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", function () {
      // OPTIONAL: clear saved login status
      localStorage.removeItem("isLoggedIn");

      // Redirect to login page
      window.location.href = "index.html";
  });
});

