document.addEventListener('DOMContentLoaded', function() {
    // Wait for 5 seconds before showing the button
    setTimeout(function() {
        const button = document.getElementById('action-button');
        button.classList.remove('hidden');
        button.classList.add('visible');
    }, 45000); // 5000 milliseconds = 5 seconds
});
