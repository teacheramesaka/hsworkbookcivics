document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll('.book-summary .chapter > .toggle');
    var chapters = document.querySelectorAll('.book-summary .chapter');
    
    // 初期状態ですべての章を折りたたむ
    chapters.forEach(function(chapter) {
        chapter.classList.remove('active');
    });

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var chapter = toggle.parentElement;
            chapter.classList.toggle('active');
        });
    });
});