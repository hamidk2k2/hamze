$(window).resize(function(){
    hideMenuTop()
});
$(".langSelect .langsSel a.lang").click(function (e) {
    e.preventDefault();
    var lang = $(this).data('lang');
    $(".langSelect .langsSel a.lang").each(function () {
        $(".langSelect").removeClass($(this).data('lang'));
        $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(".langSelect").addClass('langSelect').addClass(lang);
});
function hideMenuTop(){
    if ($(window).width() <= 768) {
        $("nav.MenuTop .cntntLinks").addClass('hide');
        $('.contentLinkSidebar .navLinks').remove();
        $('.contentLinkSidebar').prepend($("nav.MenuTop .cntntLinks").html());
    }else{
        $('.contentLinkSidebar .navLinks').remove();
        $("nav.MenuTop .cntntLinks").removeClass("hide")
    }
}
hideMenuTop()
window.addEventListener('load', function () {

    new Parallax();
    new ParallaxBG();
    $(".SliderBerguer").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInY',
        rtl: true,
        singleItem: true,
        // smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed:1000,
        lazyLoad: true,
        navigation: true,
        autoplayHoverPause: true,
        navText: ['<i class="arrowLeft"></i>', '<i class="arrowRight"></i>'],
        margin: 0,
    });
    $(".slider1").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInY',
        rtl: true,
        singleItem: true,
        // smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed:1000,
        lazyLoad: true,
        navigation: true,
        autoplayHoverPause: true,
        navText: ['<i class="arrowLeft"></i>', '<i class="arrowRight"></i>'],
        margin: 0,
    });

    $(".SlideProdBox ").owlCarousel({
        animateOut: 'bounceOutDown',
        animateIn: 'bounceInDown',
        rtl: true,
        singleItem: true,
        // smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed:1000,
        lazyLoad: true,
        navigation: true,
        autoplayHoverPause: true,
        navText: ['<i class="arrowLeft"></i>', '<i class="arrowRight"></i>'],
        margin: 0,
    });
    $(".sliderSec4").owlCarousel({
        animateOut: 'bounceOutDown',
        animateIn: 'bounceInDown',
        rtl: true,
        singleItem: true,
        // smartSpeed: 1000,
        loop: true,
        // center: true,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed:1000,
        lazyLoad: true,
        navigation: true,
        autoplayHoverPause: true,
        navText: ['<i class="arrowLeft"></i>', '<i class="arrowRight"></i>'],
        margin: 0,
        responsive : {
            0 : {
                items: 1,
            },

            // breakpoint from 768 up
            820 : {
                items: 2,
            }
        }
    });
    //
    // $(".contentNamad").niceScroll({
    //     cursorcolor:		"#1d9aa3",
    //     cursorwidth: 		"3px",
    //     cursorborder: 		"0px solid #000",
    //     scrollspeed: 		60,
    //     autohidemode: 		false,
    //     background: 		'#353535',
    //     hidecursordelay: 	400,
    //     cursorfixedheight: 	false,
    //     cursorminheight: 	20,
    //     enablekeyboard: 	true,
    //     horizrailenabled: 	true,
    //     bouncescroll: 		false,
    //     smoothscroll: 		true,
    //     iframeautoresize: 	true,
    //     touchbehavior: 		false,
    //     zindex: 999
    // });
    setTimeout(function () {
        $(".contentNamad").getNiceScroll().resize();
    },1000);
    $(window).resize(function () {
        $(".contentNamad").getNiceScroll().resize();
    })
    setTimeout(function () {
        var videoId = $(".cntntVideo").attr("videoId");
        $(".cntntVideo").html('<iframe src="https://www.aparat.com/video/video/embed/videohash/'+videoId+'/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>')
    },2000);


    scrMenu()
    $(window).scroll(function () {
        scrMenu()
    });
    function scrMenu() {
        var $height = $(window).scrollTop();
        if ($height > 20) {
            $("img.logoHeaderDown").addClass("hide");
        } else {
            $("img.logoHeaderDown").removeClass("hide");
        }
    }

    $("button.showSidebar").click(function () {
        if($(".sidebar").hasClass('active')){
            $(".sidebar").removeClass("active");
            $(".bgSidebar").removeClass("show");
            $("html").removeAttr("style");
        }else{
            $("html").css({'overflow':'hidden'});
            $(".sidebar").addClass("active");
            $(".bgSidebar").addClass("show");
        }
    });

    $(".sidebar .close , .bgSidebar").click(function () {
        $(".sidebar").removeClass("active")
        $("html").removeAttr("style");
        $(".bgSidebar").removeClass("show");
    });
    $(document).ready(function () {
        !function () {
            !function () {
                var t = document.getElementsByTagName("head")[0],
                    e = document.createElement("link");
                e.rel = "stylesheet", e.type = "text/css", e.href = "https://api.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css", e.media = "all", t.appendChild(e)
            }();
            !function (t, e) {
                var n = document.createElement("script");
                n.onload = function () {
                    e()
                }, document.body.appendChild(n), n.src = t
            }("https://api.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js", function () {
                mapboxgl.accessToken = "pk.eyJ1IjoicG9veWExMjEiLCJhIjoiY2ptNDZ3bmd4MGo2czN2cnI5bDdjbnQwYiJ9.2HrxZBck4tffmbfFn7YW4w", mapboxgl.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js");
                for (var t = document.querySelectorAll(".js-map"), e = 0; e < t.length; e++) {
                    var n = t[e],
                        i = [n.dataset.lat, n.dataset.lng],
                        r = n.dataset.zoom,
                        o = new mapboxgl.Map({
                            container: n,
                            style: 'mapbox://styles/mapbox/dark-v10',
                            center: i,
                            zoom: r
                        });
                    o.addControl(new mapboxgl.NavigationControl), o.addControl(new mapboxgl.FullscreenControl), (new mapboxgl.Marker).setLngLat(i).addTo(o);
                    o.scrollZoom.disable();
                }

                $("a.mapboxgl-ctrl-logo ,.mapboxgl-ctrl.mapboxgl-ctrl-attrib").css({"display": "none"});
            })
        }();
    })
});
function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallax',
        layers: options.layers || '.parallax-layer',
        deep: options.deep || 'data-parallax-deep'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
        for(var i = 0; i < parallaxWrappers.length; i++){
            (function(i){
                parallaxWrappers[i].addEventListener('mousemove', function(e){
                    var x = e.clientX,
                        y = e.clientY,
                        layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
                    for(var j = 0; j < layers.length; j++){
                        (function(j){
                            var deep = layers[j].getAttribute(self.nameSpaces.deep),
                                disallow = layers[j].getAttribute('data-parallax-disallow'),
                                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                            if(disallow && disallow === 'both') return;
                            layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
                        })(j);
                    }
                })
            })(i);
        }
    };
    this.init();
    return this;
}
function ParallaxBG(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallaxBg',
        layers: options.layers || '.parallax-layerBG',
        deep: options.deep || 'data-parallax-deepBG'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
        for(var i = 0; i < parallaxWrappers.length; i++){
            (function(i){
                parallaxWrappers[i].addEventListener('mousemove', function(e){
                    var x = e.clientX,
                        y = e.clientY,
                        layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
                    for(var j = 0; j < layers.length; j++){
                        (function(j){
                            var deep = layers[j].getAttribute(self.nameSpaces.deep),
                                disallow = layers[j].getAttribute('data-parallax-disallow'),
                                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                            if(disallow && disallow === 'both') return;
                            layers[j].style.backgroundPosition = '' + (itemX * 10) + ' ' + (itemY * 10) + '%';
                        })(j);
                    }
                })
            })(i);
        }
    };
    this.init();
    return this;
}
$(".paginationContent .nextPage").click(function () {
    $(".loadingContent").addClass("show");
    setTimeout(function () {
        $(".loadingContent").removeClass("show");
    },3000)
});
$(".paginationContent .backPage").click(function () {
    $(".loadingContent").addClass("show");
    setTimeout(function () {
        $(".loadingContent").removeClass("show");
    },3000)
});
$(document).ready(function () {
    setTimeout(function () {
        $(".loading").addClass("hide");
    },1000);
})




