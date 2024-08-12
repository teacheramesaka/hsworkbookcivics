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

    // 折り畳みボタンの処理
    var collapsibleButtons = document.querySelectorAll('.collapsible-button');
    
    collapsibleButtons.forEach(function(button) {
        button.classList.remove('active'); // 初期状態でactiveクラスを削除
        var content = button.nextElementSibling;
        content.style.display = "none"; // 初期状態で非表示
        
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});