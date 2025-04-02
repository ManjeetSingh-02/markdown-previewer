// import function
import { convertText } from "./markedRender.js";

// get the element from the id
const writingArea = document.getElementById("writingArea");

// function to convert text to bold
function mdBold() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `**${selectedText}**`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("**")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("**", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to italic
function mdItalic() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `*${selectedText}*`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("*")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("*", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to link
function mdLink() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();

  // if no text selected, return
  if (!selectedText) return;

  // Prompt user for link
  const promptBox = prompt("Enter the link");

  // If no link, return
  if (!promptBox) return;

  // get the text area and syntax to write
  const textSyntax = `[${selectedText}](${promptBox})`;
  let text = writingArea.value;

  // wirte the link in the text area
  writingArea.value = text.replace(selectedText, textSyntax);

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 1
function mdHeading1() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `#${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("#")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("#", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 2
function mdHeading2() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `##${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("##")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("##", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 3
function mdHeading3() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `###${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("###")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("###", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 4
function mdHeading4() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `####${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("####")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("####", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 5
function mdHeading5() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `#####${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("#####")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("#####", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to heading 6
function mdHeading6() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `######${selectedText}`;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("######")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("######", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to convert text to inline code
function mdInlineCode() {
  // get the selected and other texts
  const selectedText = document.getSelection().toString();
  const textSyntax = `\`${selectedText}\``;
  let text = writingArea.value;

  // if no text selected, return
  if (!selectedText) return;

  // Check if the selected text is already formatted
  if (selectedText.includes("`")) writingArea.value = text.replace(selectedText, selectedText.replaceAll("`", ""));
  else {
    if (text.includes(textSyntax)) writingArea.value = text.replace(textSyntax, selectedText);
    else writingArea.value = text.replace(selectedText, textSyntax);
  }

  // convert the updated text to html
  convertText();
}

// function to clear all the text
function mdClear() {
  writingArea.value = "";
  convertText();
}

// export functions
export { mdBold, mdItalic, mdLink, mdHeading1, mdHeading2, mdHeading3, mdHeading4, mdHeading5, mdHeading6, mdInlineCode, mdClear };
