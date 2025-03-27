// import module from js-delivr cdn
import showdown from "https://cdn.jsdelivr.net/npm/showdown@2.1.0/+esm";

// get all the elements from their id's
const previewArea = document.getElementById("previewArea");
const writingArea = document.getElementById("writingArea");

// function to display parse HTML
function convertText() {
  // create a converter for html conversion
  const converter = new showdown.Converter();

  // insert into preview container by converting the md into html
  previewArea.innerHTML = converter.makeHtml(writingArea.value.trim());
}

// export function
export default convertText;
