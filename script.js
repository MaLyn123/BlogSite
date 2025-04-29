// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// Comment Submission
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentSection = document.getElementById('comment-section');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        commentSection.appendChild(commentDiv);
        commentInput.value = '';
    }
});