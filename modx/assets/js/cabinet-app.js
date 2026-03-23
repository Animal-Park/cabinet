document.addEventListener('DOMContentLoaded', function () {

    // Переключение вкладок Вход / Регистрация
    document.querySelectorAll('[data-cabinet-widget]').forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var widget = this.getAttribute('data-cabinet-widget');

            document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
            document.querySelectorAll('.form-content').forEach(function (f) { f.classList.remove('active'); });

            var targetForm = document.getElementById('cabinet-form-' + widget);
            if (targetForm) {
                targetForm.classList.add('active');
            }

            if (this.classList.contains('tab')) {
                this.classList.add('active');
            }
        });
    });

    // Анимация появления карточек
    var cards = document.querySelectorAll('.section-card');
    cards.forEach(function (card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(function () {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 100);
    });

});
