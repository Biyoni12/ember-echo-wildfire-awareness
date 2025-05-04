// Character counter for the comment field
const commentField = document.getElementById('comment');
const charCount = document.getElementById('charCount');

commentField.addEventListener('input', () => {
    const remainingChars = 500 - commentField.value.length;
    charCount.textContent = `${remainingChars} characters remaining`;
});

// Emoji Rating Selection
const emojiButtons = document.querySelectorAll('.emoji-btn');
const emojiRatingValue = document.getElementById('emoji-rating-value');

emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected class from all buttons
        emojiButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to the clicked button
        button.classList.add('selected');
        
        // Store the selected value in the hidden input
        emojiRatingValue.value = button.getAttribute('data-value');
    });
});

// Preview Form Functionality
function previewForm() {
    const form = document.getElementById('feedbackform');
    const previewContent = document.getElementById('previewContent');
    const previewModal = document.getElementById('previewModal');

    // Get form values
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const comment = form.comment.value;
    const feedbackType = form.feedback_type.value;
    const topics = Array.from(form.topics.selectedOptions).map(option => option.value).join(', ');
    const suggestions = form.suggestions.value;
    const contactMethods = Array.from(form.querySelectorAll('input[name="contact_method"]:checked')).map(checkbox => checkbox.value).join(', ');
    const date = form.date.value;
    const datetime = form.datetime.value;
    const file = form.file.files[0] ? form.file.files[0].name : 'No file selected';
    const emojiRating = emojiRatingValue.value;

    // Build preview content
    previewContent.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Comment:</strong> ${comment}</p>
        <p><strong>Feedback Type:</strong> ${feedbackType}</p>
        <p><strong>Topics of Interest:</strong> ${topics}</p>
        <p><strong>Suggestions:</strong> ${suggestions}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethods}</p>
        <p><strong>Selected Date:</strong> ${date}</p>
        <p><strong>Selected Date and Time:</strong> ${datetime}</p>
        <p><strong>Uploaded File:</strong> ${file}</p>
        <p><strong>Emoji Rating:</strong> ${emojiRating}</p>
    `;

    // Show the preview modal
    previewModal.style.display = 'flex';
}

// Close Preview Modal
function closePreview() {
    const previewModal = document.getElementById('previewModal');
    previewModal.style.display = 'none';
}