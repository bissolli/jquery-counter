(function ($) {

    var _elements,
        _options;

    var methods = {
        init: function (elements, options) {
            _elements = elements;
            _options = options;

            methods.bind();
        },
        bind: function () {
            $(window).scroll(function () {
                methods.animate(_elements, _options);
            });
            $(window).trigger('scroll');
        },
        animate: function (elements, options) {

            var viewHeight = $(window).height(),
                viewTopOffset = $(window).scrollTop(),
                viewBottomOffset = (viewTopOffset + viewHeight);

            $.each(elements, function (index) {
                try {
                    var elementTopOffset = $(this).offset().top;
                } catch (e) {
                    return;
                }

                var $this = $(this),
                    elementOffset = $this.data('offset') || 200,
                    elementDuration = $this.data('duration') || 3000,
                    elementDelay = $this.data('delay') || 200,
                    elementHeight = $this.outerHeight(),
                    elementBottomOffset = (elementTopOffset + elementHeight);

                if (elementOffset) {
                    elementTopOffset += elementOffset;
                    elementBottomOffset -= elementOffset;
                }

                if (parseInt($this.text()) > 0) {
                    $this.attr('data-count-to', parseInt($this.text()))
                }

                var elementCountTo = parseInt($this.attr('data-count-to')) || 0;

                $this.text(0);

                if ((elementBottomOffset >= viewTopOffset) && (elementTopOffset <= viewBottomOffset)) {
                    _elements.splice(index, 1);

                    setTimeout(function () {
                        $this.animate({ counter: elementCountTo }, {
                            duration: elementDuration,
                            easing: 'linear',
                            step: function() {
                                $this.text(methods.formatNumber(Math.floor(this.counter), _options.decimals, _options.decPoint, _options.thousandsSep));
                            },
                            complete: function() {
                                $this.text(methods.formatNumber(Math.floor(this.counter), _options.decimals, _options.decPoint, _options.thousandsSep));
                            }
                        });
                    }, elementDelay)
                }
            });
        },
        formatNumber: function (n, c, w, t) {
            var c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
                j = (j = i.length) > 3 ? j % 3 : 0;

            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }
    };

    jQuery.fn.counter = function (options) {
        options = $.extend({
            decimals: 0,
            decPoint: ".",
            thousandsSep: ","
        }, options);

        if (
            options.mobile === false
            && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ) {
            return false;
        }

        methods.init(this, options);
    };
})(jQuery);
