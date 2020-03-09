(function () {
    var dkImages = {
        'aside__elem_one_bg_3': './img/doorkeeper_s10.png',
        'aside__elem_one_bg_2': './img/doorkeepers15.png',
        'aside__elem_one_bg_4': './img/doorkeepers1.png',

    };
    var mainImage = document.getElementById('nav__elem_img_doorkeeper');

    for (var elId in dkImages) {
        document.getElementById(elId)
            .addEventListener('click', function (e) {
                mainImage.src = dkImages[e.target.id];
            });
    }
})();

