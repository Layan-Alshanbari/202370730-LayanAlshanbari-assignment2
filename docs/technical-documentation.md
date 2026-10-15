# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website created using HTML, CSS, and JavaScript. It contains About Me, Projects, and Contact sections, along with a home section and a dark/light theme button.

## Project Structure

```text
repository-root/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

- `index.html` contains the website content.
- `css/styles.css` contains the design and responsive layout.
- `js/script.js` contains the dark-mode feature.
- `assets/images/` contains the project illustrations.
- `docs/` contains the assignment documentation.

## Technical Implementation

The HTML uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.

CSS Flexbox is used for the navigation, while CSS Grid is used for the project cards. On mobile screens, projects appear in one column. At a width of 768 pixels or more, they appear in two columns.

The website uses the following main colors:

- `#FFC2F4`
- `#ECC2FF`
- `#FFC2D5`

JavaScript controls the dark/light theme. When the theme button is clicked, the script adds or removes the `dark-mode` class from the page.

## Accessibility

The website includes:

- Labels connected to the contact-form fields.
- Required name, email, and message fields.
- Descriptive alternative text for project images.
- Semantic HTML elements.
- An accessible navigation label.
- Readable text and background colors.

## Testing

The website has been tested in Safari using a mobile-sized browser window and laptop Safari browser window.

Before submission, it will also be tested at tablet and desktop sizes. The navigation links, dark mode, form validation, images, and browser console will be checked.

## Known Limitations

The contact form does not send information because the assignment does not require a backend. The selected theme also resets when the webpage is refreshed.