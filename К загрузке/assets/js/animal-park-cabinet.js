document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.section-card, .cabinet .card, .cabinet .order');
    cards.forEach(function (c, i) {
        c.style.opacity = '0';
        c.style.transform = 'translateY(20px)';
        setTimeout(function () {
            c.style.transition = 'all 0.5s ease';
            c.style.opacity = '1';
            c.style.transform = 'translateY(0)';
        }, i * 100);
    });
});
