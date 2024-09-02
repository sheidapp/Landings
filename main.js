// Function to toggle the selection of images
function toggleSelection(element) {
    element.classList.toggle('selected');
}

// Ensure this code runs when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const captchaImages = document.querySelectorAll('.captcha-image');
    const verifyButton = document.getElementById('verify-button');

    // Add click event to each captcha image
    captchaImages.forEach(image => {
        image.addEventListener('click', function() {
            // Check if the image is of a cat using the 'data-image' attribute
            if (this.getAttribute('data-image').startsWith('cat')) {
                toggleSelection(this);
            }
        });
    });
});
