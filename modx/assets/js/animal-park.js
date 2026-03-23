document.addEventListener('DOMContentLoaded', function () {

    /* Подсветка текущего пункта sidebar */
    var currentPath = window.location.pathname;
    document.querySelectorAll('.ap-sidebar__link[href]').forEach(function (link) {
        if (link.classList.contains('logout')) return;
        var href = link.getAttribute('href');
        if (href && currentPath.indexOf(href) === 0 && href !== '/') {
            link.classList.add('active');
        }
    });

    /* Анимация карточек при загрузке */
    var cards = document.querySelectorAll('.ap-card, .ap-stats__item, .cabinet .card, .cabinet .order');
    cards.forEach(function (card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(function () {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 80);
    });

});
