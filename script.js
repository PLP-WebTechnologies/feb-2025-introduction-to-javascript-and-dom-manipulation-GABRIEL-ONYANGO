// Change text content dynamically
document.querySelector('h2').textContent = 'Welcome to Computer Science World';

// Modify CSS style
document.body.style.backgroundColor = '#f0f8ff'; // light blue background

// Create a button to add/remove a paragraph
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Description';
toggleBtn.style.margin = '20px';
document.body.appendChild(toggleBtn);

// Paragraph to add/remove
const description = document.createElement('p');
description.textContent = 'Computer Science is the study of computation and information.';

// Flag to check if paragraph is on page
let isShown = false;

toggleBtn.addEventListener('click', () => {
    if (isShown) {
        document.body.removeChild(description);
        isShown = false;
    } else {
        document.body.appendChild(description);
        isShown = true;
    }
});
