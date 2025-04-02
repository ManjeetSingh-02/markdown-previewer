// import all the functions from other files
import { convertText, addIndents, loadMD } from "./markedRender.js";
import { loadTheme, switchTheme } from "./themeFns.js";
import { mdBold, mdItalic, mdLink, mdHeading1, mdHeading2, mdHeading3, mdHeading4, mdHeading5, mdHeading6, mdInlineCode, mdClear } from "./optionsFns.js";

// get all the elements from their id's
const switchThemeBtn = document.getElementById("switchThemeBtn");
const openGitHubBtn = document.getElementById("openGitHubBtn");
const writingArea = document.getElementById("writingArea");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const linkBtn = document.getElementById("linkBtn");
const heading1Btn = document.getElementById("heading1Btn");
const heading2Btn = document.getElementById("heading2Btn");
const heading3Btn = document.getElementById("heading3Btn");
const heading4Btn = document.getElementById("heading4Btn");
const heading5Btn = document.getElementById("heading5Btn");
const heading6Btn = document.getElementById("heading6Btn");
const inlineCodeBtn = document.getElementById("inlineCodeBtn");
const eraseAllBtn = document.getElementById("eraseAllBtn");
const instructionsBox = document.getElementById("instructionsBox");
const openInstructionsBtn = document.getElementById("openInstructionsBtn");
const closeInstructionsBtn = document.getElementById("closeInstructionsBtn");

// switch theme on click of the button
switchThemeBtn.addEventListener("click", switchTheme);

// open github link on click of the button
openGitHubBtn.addEventListener("click", () => window.open("https://github.com/ManjeetSingh-02/masterji-markdown-previewer"));

// action according to the option in md
boldBtn.addEventListener("click", mdBold);
italicBtn.addEventListener("click", mdItalic);
linkBtn.addEventListener("click", mdLink);
heading1Btn.addEventListener("click", mdHeading1);
heading2Btn.addEventListener("click", mdHeading2);
heading3Btn.addEventListener("click", mdHeading3);
heading4Btn.addEventListener("click", mdHeading4);
heading5Btn.addEventListener("click", mdHeading5);
heading6Btn.addEventListener("click", mdHeading6);
inlineCodeBtn.addEventListener("click", mdInlineCode);
eraseAllBtn.addEventListener("click", mdClear);

// open the instructions box on click
openInstructionsBtn.addEventListener("click", () => (instructionsBox.style.translate = "0 0"));

// close the instructions box on click
closeInstructionsBtn.addEventListener("click", () => (instructionsBox.style.translate = "0 -200%"));

// change preview according to text input via listener
writingArea.addEventListener("input", convertText);

// add indent tab key press
writingArea.addEventListener("keydown", (e) => addIndents(e));

// load the default functionality when page loads first time
document.addEventListener("DOMContentLoaded", async () => {
  // if not present, store default empty object in localstorage
  if (!localStorage.getItem("markdownPreviewer")) localStorage.setItem("markdownPreviewer", JSON.stringify({}));

  // load default theme
  loadTheme();

  // load default text
  loadMD();

  // if something present in writing area by default, then convert it into HTML
  convertText();
});
