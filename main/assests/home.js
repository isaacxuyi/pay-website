
function toggleDropdown() {

let dropdown = document.getElementById('myDropdown');
dropdown.classList.toggle('show')
}

window.onclick = function(event) {
    if (! event.target.matches('.dropdown i')){
        let dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
