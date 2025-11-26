const sectionItems = document.querySelectorAll(".sections-item");
const sections = document.querySelectorAll("section");
const discordIcon = document.querySelector("#discord");
const emailIcon = document.querySelector("#email");

// Function to change section
function showSection(sectionName) {
  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const targetSection = document.querySelector(`.${sectionName}`);

  if (targetSection) {
    targetSection.classList.add("active");
  }
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`Copied text: ${text}`);
    })
    .catch((err) => {
      console.error(`Error copying: ${err}`);
    });
}

// Event listeners for navigation items
sectionItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const sectionsMap = ["about-me", "videos-section", "shorts-section"];
    showSection(sectionsMap[index]);
  });
});

// Show the about-me section by default
showSection("about-me");

// Discord SVG event
discordIcon.addEventListener("click", () => {
  alert(
    "You copied my Discord username (kevouz) to your clipboard, use it to send me a friend request!"
  );
  copyToClipboard("kevouz");
});

// Email SVG event
emailIcon.addEventListener("click", () => {
  alert(
    "You've copied my email (kmarrufo62@gmail.com) to your clipboard, use it to contact me!"
  );
  copyToClipboard("kmarrufo62@gmail.com");
});
