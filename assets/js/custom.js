document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll('.book-summary .chapter > .toggle');
    
    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var chapter = toggle.parentElement;
            chapter.classList.toggle('active');
        });
    });
});