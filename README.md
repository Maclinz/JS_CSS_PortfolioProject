# Portfolio

This repository is related to the course [[Portfolio Website Tutorial – Frontend Development with HTML, CSS, JavaScript](https://www.youtube.com/watch?v=xV7S8BhIeBo&t)] available on the freeCodeCamp's YouTube channel.

## Description
In this course, you will learn how to build a portfolio website using JavaScript, HTML, and CSS. This is a great project to improve you frontend development skills.

✏️ MacLinz developed this course course. Check out his [channel](https://www.youtube.com/c/MacLinzUniversalChannel).

## ⚠️ Important notice
The current version of this repository can contain code which differs from the original code shown in the video. The code has been improved or customized by [Dyrits](https://github.com/Dyrits), adding semantic elements, and a more optimized JavaScript script, but the visual rendering of the portfolio remains globally the same.

The original code is available [here](https://github.com/Maclinz/JS_CSS_PortfolioProject/tree/1f1c0205c0b3a8caa623c96402775974f39ab5cb).

### Main differences from the original
- Multiple scripts have been added to the code, including data objects that can be filled in order to automatically generate some elements.
- The stylesheets have been divided in multiple partial files, each one containing a specific style for a specific section.
- A lot of identifiers and class names have been modified.
- The tiles in the portfolio and blog section have been modified, in order to have a fixed size.
- The breakpoints for the media queries have been modified.
- The sections are displayed differently with different titles, and are all centered on smaller screens.

## Changelog

### Last updates [06/05/2022-20/05/2022]
The portfolio is now responsive.  
It is now possible to add new articles for the blog section in the dedicated object in the `data/articles.js`, generating automatically the tiles.  
It is now possible to add new projects for the portfolio section in the dedicated object in the `data/projects.js`, generating automatically the tiles.  
It is now possible to add new skills for the about section in the dedicated object in the `data/skills.js`, generating automatically the progression bars.  

### Update [06/05/2022]
It is now possible to add new skills in the dedicated object in the `stastistics.js`, generating automatically new progression bars.  The label of the progression bars has been replaced by an icon.