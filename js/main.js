// Get the toggle switch input element
const modeToggleCheckbox = document.querySelector("#flexSwitchCheckDefault");

// Add an event listener for when the toggle switch is changed
modeToggleCheckbox.addEventListener("change", () => {
  // If the toggle switch is checked, add the "dark-mode" class to the body element
  if (modeToggleCheckbox.checked) {
    document.body.classList.add("dark-mode");
    // Set the switch label color to white
    modeToggleCheckbox.nextElementSibling.style.backgroundColor = "#000";
    modeToggleCheckbox.nextElementSibling.style.color = "#fff";
  } else {
    // If the toggle switch is not checked, remove the "dark-mode" class from the body element
    document.body.classList.remove("dark-mode");
    // Set the switch label color to black
    modeToggleCheckbox.nextElementSibling.style.backgroundColor = "#fff";
    modeToggleCheckbox.nextElementSibling.style.color = "#000";
  }
});

// Check if the user has previously enabled dark mode through their system settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // If so, check the toggle switch and add the "dark-mode" class to the body element
  modeToggleCheckbox.checked = true;
  document.body.classList.add("dark-mode");
  // Set the switch label color to white
  modeToggleCheckbox.nextElementSibling.style.backgroundColor = "#000";
  modeToggleCheckbox.nextElementSibling.style.color = "#fff";
}
