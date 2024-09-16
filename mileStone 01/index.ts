const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills");

toggleSkillsBtn?.addEventListener("click", () => {
  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection!.style.display = "none";
  }
});