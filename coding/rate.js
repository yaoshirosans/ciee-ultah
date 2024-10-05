document.addEventListener('DOMContentLoaded', function() {
    const emojis = document.querySelectorAll('.emoji');

    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            // Get the selected rating value from the emoji clicked
            const selectedRating = this.getAttribute('data-value');
            
            // Optionally, you can show an alert or log the rating
            alert(`You rated: ${selectedRating} stars with emoji`);
            
            // Redirect to the next page based on the selected rating
            window.location.href = `Terimakasih.html?rating=${selectedRating}`;
        });
    });
});
