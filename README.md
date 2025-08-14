# masterji-markdown-previewer

**Objective:**

Build a simple readme markdown previewer that allows users to enter markdown text in a textarea and display the formatted preview in real time without any extra API calls to backend. You may use a js Markdown parser like marked.js or write your own basic parser. This assignment will help you practice working with user input, text processing, and dynamically updating the DOM based on user interactions.

- TechStack: `HTML`, `CSS` and `JS`

**Requirements:**

- A textarea where users can type Markdown syntax (on left-hand side)
- A preview section that displays the formatted output in real time (on right-hand side)
- Support for basic Markdown elements like:

  - Headings (# H1, ## H2, etc.)
  - Bold & Italics (**bold**, italic)
  - Links ([title](http://example.com))
  - Lists (ordered and unordered)
  - A clear/reset button to clear the textarea

- To handle code blocks (inline and multi-line) with highlighting code blocks

## Introduction

- The Markdown Previewer is a web application that display md into html

## Scope

- The project aims to provide a good Markdown Previewer with essential features
- This application will have a simple and user friendly interface to interact between users and application
- This application has feature to switch b/w light or dark theme

## Features

- **Accessible** on both mobile devices and desktops
- **Responsive** on both mobile devices and desktops
- Functionality to **switch b/w light and dark theme** by clicking on **Theme Icon Button**
- Functionality to toggle the **instruction box** for usage of web app
- Functionality for handling multiple things:
  - Headings(H1, H2, H3, H4, H5, H6)
  - Links
  - Bold
  - Italics
  - Lists(ordered and unordered)
  - Code(inline and blocks)
  - Clear/Reset

## Screenshots

**Home Page Light Theme**
![Home Page Light Theme](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-markdown-previewer/main/assets/images/01_homepage.png)

**Home Page Dark Theme**
![Home Page Light Theme](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-markdown-previewer/main/assets/images/02_homepage_dark.png)

**Features**
![Features](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-markdown-previewer/main/assets/images/03_features.png)

**Instructions Box**
![Instructions](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-markdown-previewer/main/assets/images/04_instructions.png)

## Important Information

### PACKAGE

- Application uses `showdown.js` [**showdown website**](https://showdownjs.com/) to parse and convert md to html
- `showdown.js` is a npm package free to use [**package here**](https://www.npmjs.com/package/showdown)

### Responsive

- Application uses certain breakpoints to provide responsiveness among multiple devices that are standerized globally
- These standerized breakpoints are avaliable at [**Tailwind CSS**](https://tailwindcss.com/docs/responsive-design)

## Deployment

- Application is deployed on GitHub Pages for accessibility across web
- View Website - [**Click Here**](https://manjeetsingh-02.github.io/markdown-previewer/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
