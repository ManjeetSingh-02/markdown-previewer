// import all the functions from other files
import convertText from "./markedRender.js";
import { loadTheme, switchTheme } from "./themeFns.js";

// get all the elements from their id's
const switchThemeBtn = document.getElementById("switchThemeBtn");
const openGitHubBtn = document.getElementById("openGitHubBtn");
const writingArea = document.getElementById("writingArea");

// switch theme on click of the button
switchThemeBtn.addEventListener("click", switchTheme);

// open github link on click of the button
openGitHubBtn.addEventListener("click", () => window.open("https://github.com/ManjeetSingh-02/masterji-markdown-previewer"));

// change preview according to text input via listener
writingArea.addEventListener("input", convertText);

// load the default functionality when page loads first time
document.addEventListener("DOMContentLoaded", async () => {
  // if not present, store default empty object in localstorage
  if (!localStorage.getItem("markdownPreviewer")) localStorage.setItem("markdownPreviewer", JSON.stringify({}));

  // load default theme
  loadTheme();
});
