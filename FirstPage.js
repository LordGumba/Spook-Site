document.addEventListener('DOMContentLoaded', function() {
    const secretButton = document.getElementById('secretButton');
    
    secretButton.addEventListener('click', function() {
        // Change the background color to a different color
        document.body.style.backgroundColor = 'yellow';
        
        // Set a timeout to change the background color back to the original color after 1 second
        setTimeout(function() {
            document.body.style.backgroundColor = ''; // Reset to original
        }, 100000); // 1000 milliseconds = 1 second
    });
});
