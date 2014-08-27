window.onload = function () {
            var container = $j('div.sliderGallery');
            var ul = $j('ul', container);
            
            var itemsWidth = ul.innerWidth() - container.outerWidth();
            
            $j('.slider', container).slider({
                min: 0,
                max: itemsWidth,
                handle: '.handle',
                stop: function (event, ui) {
                    ul.animate({'left' : ui.value * -1}, 500);
                },
                slide: function (event, ui) {
                    ul.css('left', ui.value * -1);
                }
            });
        };