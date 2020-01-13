(function () {
    $(document).ready(function () {
        /*------------animate for links ------------*/
        $('a[href^="#"]').click(function () {
            let target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);
            return false;
        });

        /*--------------gallery fix ----------------*/
        let mixer = mixitup('.container-filter');
        let elem = $('[data-filter="all"]');
        let elems = $('.single-cat');

        let change1 = $('#ex1');
        let change2 = $('#ex6');

        elem.on('click', function() {
            change1.css('grid-column', '');
            change2.css('grid-column', '');
            change1.css('grid-column', 1/3);
            change2.css('grid-column', 3/5);
        });


        elems.on('click', function() {
            change1.css('grid-column', 'auto');
            change2.css('grid-column', 'auto');
        });
    });
})();
