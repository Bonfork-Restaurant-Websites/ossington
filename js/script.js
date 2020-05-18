// Blur Effect
(function () {
    $('.modal').on('show.bs.modal', function (e) {
        $('body').addClass('modalBlur');
        $('body').removeClass('animated fadeIn');
    })

    $('.modal').on('hide.bs.modal', function (e) {
        setTimeout(() => {
            $('body').removeClass('modalBlur');
        }, 400)
        $('body').addClass('animated fadeIn');
    })

    $('#about-fullscreen').on('shown.bs.modal', function (e) {
        $('.owl-carousel').addClass('animated fadeIn slow');
    })
})();

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});


/* Fromating the date in the booking form  */
var date = document.getElementById('date');

function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
};

date.addEventListener('input', function (e) {
    this.type = 'text';
    var input = this.value;
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], 31);
    var output = values.map(function (v, i) {
        return v.length == 2 && i < 1 ? v + ' / ' : v;
    });
    this.value = output.join('').substr(0, 14);
});

/* to format the time input */
var time = document.getElementById('time');

time.addEventListener('input', function (e) {
    this.type = 'text';
    var input = this.value;
    if (/\D\:$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split(':').map(function (v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 23);
    if (values[1]) values[1] = checkValue(values[1], 60);
    var output = values.map(function (v, i) {
        return v.length == 2 && i < 1 ? v + ' : ' : v;
    });
    this.value = output.join('').substr(0, 14);
});


// Ajax Forms
function getFormDataString(formEl) {
    var formData = new FormData(formEl),
        data = [];

    for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
    }

    return data.join("&");
}

// Format phone number input
let telInput = $("#phone");

// initialize
telInput.intlTelInput({
    initialCountry: 'auto',
    separateDialCode: true,
    hiddenInput: "Full Phone",
    preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
    geoIpLookup: function (callback) {
        fetch('https://api.ipdata.co/?api-key=a86af3a7a4a375bfa71f9259b5404149d1eabb74adcc275e4faf9dfe', {
            cache: 'reload'
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed: ' + response.status)
        }).then(ipjson => {
            callback(ipjson.country_code)
        }).catch(e => {
            callback('us')
        })
    }
});



// Cursor 
const cursor = $(".cursor"),
    body = $("body"),
    wwidth = $(window).width(),
    wheight = $(window).height(),

    cursorMove = function () {
        var e, n;
        return (
            body.addClass("cursor-on"),
            cursor.css({
                transform: "matrix(1, 0, 0, 1, " + wwidth / 2 + ", " + wheight / 2 + ")"
            }),
            (e = wheight / 2),
            (n = 0.65 * wwidth / 2),
            n > e ? e : n,
            $(window).on("mousemove", function (e) {
                var n, t;
                if (
                    ((window.x = e.clientX),
                        (window.y = e.clientY),
                        cursor.css({
                            transform: "matrix(1, 0, 0, 1, " + x + ", " + y + ")"
                        }))
                );
            })
        );
    };
cursorBind = function () {
    var e, n, t;
    if (
        ((n = cursor.find("span")).removeClass("link external new"),
            (e = $(".focus")),
            (t = $(".slack")),
            $(window).on({
                mouseenter: function () {
                    return n.removeClass("off");
                },
                mouseleave: function () {
                    return n.addClass("off");
                }
            }),
            $("a, button").on({
                mouseenter: function () {
                    var e;
                    return (
                        (e = $(this).hasClass("external") ? "link external" : "link"),
                        n.addClass(e)
                    );
                },
                mouseleave: function () {
                    return n.removeClass("link external");
                }
            })
        )
    )
        return;
};

cursorMove();
cursorBind();

// Preloader
(function ($) {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 500,
        outDuration: 500,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href$=".jpg"]):not([href$=".png"])',
        loading: true,
        loadingParentElement: "body",
        loadingClass: "animsition-loading2",
        loadingInner:
            '<div class="spinner">\n        <div class="double-bounce1"></div>\n      <div class="double-bounce2"></div>\n      </div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function transition(url) {
            window.location.href = url;
        }
    });
})(jQuery);

if ($('#reservation-form').length) {
    $('#reservation-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector(".alert-success").style.display= "block";
                        console.log("Success");
                    },

                    error: function(){
                       document.querySelector(".alert-danger").style.display= "block";
                      console.log("Fail");
                    }
                });
            }
        });
    });
}
