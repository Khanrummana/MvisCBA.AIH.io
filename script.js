document.addEventListener('DOMContentLoaded', function() {
    // Attach click event listeners to 'Select' buttons
    var selectButtons = document.querySelectorAll('.dataset button');
    selectButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Get the dataset name from the sibling span elements
            var datasetName = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            // Check if the selected dataset is 'Insurance Claims'
            if (datasetName === 'Insurance Claims') {
                // Navigate to the external link associated with the Insurance Claims dataset
                window.location.href = 'https://www.tableau.com/academic/students';
            } else {
                // For all other datasets, display an alert (or handle differently)
                alert('You have selected the ' + datasetName + ' dataset for Fraud detection.');
            }
        });
    });
});
