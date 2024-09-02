/* JavaScript Document */

/* 
Author: Rongrong Liu
File Name: projects.js
Date Created: 2024-06-29
Section: CST 8285 section 313
Professor: Daniel Gaudreault
Description: This page defines functions to apply to projects.html
*/

document.addEventListener('DOMContentLoaded', () => {
    // Select all project elements
    const projects = document.querySelectorAll('.project');

    // Array of images for the tools project
    const toolsImages = [
        'images/tools.png',
        'images/tools2.png',
        'images/tools3.png',
        'images/tools4.png'
    ];

    // Initialize index variables
    let currentProjectIndex = 0;
    let currentImageIndex = 0;

    // Function to show/hide projects based on index
    const showProject = (index) => {
        projects.forEach((project, i) => {
            project.style.display = i === index ? 'flex' : 'none'; // Show current project, hide others
        });
    };

    // Function to update main image based on index
    const showImage = (index) => {
        const mainImage = document.getElementById('main-image');
        mainImage.src = toolsImages[index]; // Set src attribute of main image
    };

    // Event listener for previous project button
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        showProject(currentProjectIndex);
    });

    // Event listener for next project button
    document.getElementById('next-btn').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        showProject(currentProjectIndex);
    });

    // Event listener for previous image button
    document.getElementById('prev-img-btn').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + toolsImages.length) % toolsImages.length;
        showImage(currentImageIndex);
    });

    // Event listener for next image button
    document.getElementById('next-img-btn').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % toolsImages.length;
        showImage(currentImageIndex);
    });

    // Initialize by showing the first project and first image
    showProject(currentProjectIndex);
    showImage(currentImageIndex);
});
