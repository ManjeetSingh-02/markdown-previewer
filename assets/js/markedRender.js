// import module from js-delivr cdn
import showdown from "https://cdn.jsdelivr.net/npm/showdown@2.1.0/+esm";

// get all the elements from their id's
const previewArea = document.getElementById("previewArea");
const writingArea = document.getElementById("writingArea");

// create a converter for html conversion with some extended features
const converter = new showdown.Converter({
  simpleLineBreaks: "true",
  smartIndentationFix: "true",
  smoothLivePreview: "true",
  strikethrough: "true",
  tasklists: "true",
  underline: "true",
});

// function to display parse HTML
function convertText() {
  // converting the md into html and append inside the preview container
  previewArea.innerHTML = converter.makeHtml(writingArea.value.trim());
}

// export function
export default convertText;
