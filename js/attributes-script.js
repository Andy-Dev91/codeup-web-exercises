document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("profile-pic").src = "img/codeup-duck.png"; // Change the profile picture src
    }, 2000); // Change picture after 2 seconds

    setTimeout(function() {
        document.getElementById("profile-name").innerHTML = "Jane Doe"; // Change the profile name
    }, 4000); // Change name after 4 seconds

    setTimeout(function() {
        document.getElementById("profile-desc").classList.add("new-description"); // Add a class to change description style
    }, 6000); // Change description style after 6 seconds

    let toggle = true;
    setInterval(function() {
        const profileCard = document.getElementById("profile-card");
        toggle ? profileCard.classList.add("alternate-bg") : profileCard.classList.remove("alternate-bg");
        toggle = !toggle;
    }, 2000); // Toggle background every 2 seconds
});
