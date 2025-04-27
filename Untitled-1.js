// Select the button and the text element
const changeTextBtn = document.getElementById('changeTextBtn');
const textChange = document.getElementById('textChange');

// Add an event listener to the button to change the text when clicked
changeTextBtn.addEventListener('click', function() {
    textChange.textContent = 'You have successfully changed the text!';
});
