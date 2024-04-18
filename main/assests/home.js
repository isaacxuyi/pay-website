function toggleDropdown() {
    let dropdown = document.getElementById('myDropdown');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}

document.addEventListener('click', function(event) {
    // Check if the clicked element is not part of a dropdown or the dropdown trigger
    if (!event.target.matches('.dropdown') && !event.target.closest('.dropdown')) {
        // Get all dropdowns
        let dropdowns = document.querySelectorAll('.dropdown-content');
        
        // Loop through each dropdown and close it if it's open
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});
