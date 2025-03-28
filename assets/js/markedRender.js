// import module from js-delivr cdn
import showdown from "https://cdn.jsdelivr.net/npm/showdown@2.1.0/+esm";

// get all the elements from their id's
const previewArea = document.getElementById("previewArea");
const writingArea = document.getElementById("writingArea");

// create a converter for html conversion with some extended features
const converter = new showdown.Converter({
  disableForced4SpacesIndentedSublists: true,
  smartIndentationFix: "true",
  smoothLivePreview: "true",
});

// function to display parse HTML
function convertText() {
  // converting the md into html and append inside the preview container
  previewArea.innerHTML = converter.makeHtml(writingArea.value.trim());
}

// function to add 4 indent spaces
function addIndents(e) {
  if (e.key === "Tab") {
    // prevent default tab behaviour
    e.preventDefault();

    // get cursor current position from start and end
    const start = writingArea.selectionStart;
    const end = writingArea.selectionEnd;

    // Insert four spaces at the current cursor position
    writingArea.value = writingArea.value.substring(0, start) + "  " + writingArea.value.substring(end);
  }
}

// export functions
export { convertText, addIndents };
