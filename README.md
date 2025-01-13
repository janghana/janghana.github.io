# Han Jang's Portfolio

This repository contains my personal portfolio website, showcasing my **Home**, **CV**, **Experience**, **Publications**, **Projects**, and **Contact** pages.  
It's a **React** project, structured to be **responsive** across desktop and mobile devices.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Folder Structure](#folder-structure)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Deployment (GitHub Pages)](#deployment-github-pages)  
7. [Packages & Libraries](#packages--libraries)  
8. [License](#license)

---

## Project Overview

- **Framework**: [React](https://reactjs.org/)  
- **Layout**: Multiple pages (Home, CV, Experience, Publications, Projects, Contact)  
- **Responsive**: Uses `flexbox` + **media queries** for mobile-friendly design  
- **Styling**: Primarily custom CSS in `App.css`, plus some inline styles  
- **Modal Images**: [react-modal-image](https://www.npmjs.com/package/react-modal-image) for clickable/zoomable images  
- **Mathematical Expressions**: [react-katex](https://www.npmjs.com/package/react-katex) for LaTeX-style math rendering  

---

## Features

1. **Home**  
   - Basic introduction to who I am and what I do.

2. **CV**  
   - Education, experience, research interest, skills, honors & awards, and licenses.

3. **Experience**  
   - Timeline of work/research experiences with logos, short descriptions, and links.

4. **Publications**  
   - List of published works, with reference details and external links.

5. **Projects**  
   - Showcases major projects with images, short explanations, and references to code/papers.

6. **Contact**  
   - Contact email, plus map embed and links to GitHub, LinkedIn, Blog, Google Scholar, etc.

7. **LeftSideProfile**  
   - Common profile component displayed on every page’s left side.

---

## Folder Structure

Below is a simplified version of how the major files/folders are organized:

```plaintext
my-portfolio/
├─ public/
│   ├─ index.html
│   └─ icon.ico
├─ src/
│   ├─ components/
│   │   ├─ Home.js
│   │   ├─ CV.js
│   │   ├─ Experience.js
│   │   ├─ Publications.js
│   │   ├─ Projects.js
│   │   └─ Contact.js
│   ├─ LeftSideProfile.js
│   ├─ App.js
│   ├─ App.css
│   ├─ ...
│   └─ pjts/
│       ├─ ...
├─ package.json
├─ README.md (this file)
├─ yarn.lock or package-lock.json
└─ ...
```

- **`App.js`** sets up routes to each page (`Home`, `Contact`, etc.) if using React Router (or direct links).
- **`LeftSideProfile.js`** the common sidebar content across pages.

---

## Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/janghana/my-portfolio.git
   cd my-portfolio
