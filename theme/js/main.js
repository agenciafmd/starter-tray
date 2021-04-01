// lazyload
var _extends = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }; !function (e, t) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t() }(this, function () { "use strict"; var e = { elements_selector: "img", container: document, threshold: 30, data_src: "src", data_srcset: "srcset", class_loading: "loading", class_loaded: "loaded", class_error: "error", callback_load: null, callback_error: null, callback_set: null, callback_enter: null }, t = function (e, t) { return e.getAttribute("data-" + t) }, n = function (e, t, n) { return e.setAttribute("data-" + t, n) }, r = function (e) { return e.filter(function (e) { return !t(e, "was-processed") }) }, s = function (e, t) { var n, r = new e(t); try { n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: r } }) } catch (e) { (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: r }) } window.dispatchEvent(n) }, o = function (e, n) { var r = n.data_srcset, s = e.parentNode; if ("PICTURE" === s.tagName) for (var o, a = 0; o = s.children[a]; a += 1)if ("SOURCE" === o.tagName) { var i = t(o, r); i && o.setAttribute("srcset", i) } }, a = function (e, n) { var r = n.data_src, s = n.data_srcset, a = e.tagName, i = t(e, r); if ("IMG" === a) { o(e, n); var c = t(e, s); return c && e.setAttribute("srcset", c), void (i && e.setAttribute("src", i)) } "IFRAME" !== a ? i && (e.style.backgroundImage = 'url("' + i + '")') : i && e.setAttribute("src", i) }, i = "classList" in document.createElement("p"), c = function (e, t) { i ? e.classList.add(t) : e.className += (e.className ? " " : "") + t }, l = function (e, t) { i ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|jQuery)"), " ").replace(/^\s+/, "").replace(/\s+jQuery/, "") }, u = function (e, t) { e && e(t) }, d = function (e, t, n) { e.removeEventListener("load", t), e.removeEventListener("error", n) }, f = function (e, t) { var n = function n(s) { _(s, !0, t), d(e, n, r) }, r = function r(s) { _(s, !1, t), d(e, n, r) }; e.addEventListener("load", n), e.addEventListener("error", r) }, _ = function (e, t, n) { var r = e.target; l(r, n.class_loading), c(r, t ? n.class_loaded : n.class_error), u(t ? n.callback_load : n.callback_error, r) }, v = function (e, t) { u(t.callback_enter, e), ["IMG", "IFRAME"].indexOf(e.tagName) > -1 && (f(e, t), c(e, t.class_loading)), a(e, t), n(e, "was-processed", !0), u(t.callback_set, e) }, m = function (t, n) { this._settings = _extends({}, e, t), this._setObserver(), this.update(n) }; m.prototype = { _setObserver: function () { var e = this; if ("IntersectionObserver" in window) { var t = this._settings; this._observer = new IntersectionObserver(function (n) { n.forEach(function (n) { if (n.isIntersecting || n.intersectionRatio > 0) { var r = n.target; v(r, t), e._observer.unobserve(r) } }), e._elements = r(e._elements) }, { root: t.container === document ? null : t.container, rootMargin: t.threshold + "px" }) } }, update: function (e) { var t = this, n = this._settings, s = e || n.container.querySelectorAll(n.elements_selector); this._elements = r(Array.prototype.slice.call(s)), this._observer ? this._elements.forEach(function (e) { t._observer.observe(e) }) : (this._elements.forEach(function (e) { v(e, n) }), this._elements = r(this._elements)) }, destroy: function () { var e = this; this._observer && (r(this._elements).forEach(function (t) { e._observer.unobserve(t) }), this._observer = null), this._elements = null, this._settings = null } }; var b = window.lazyLoadOptions; return b && function (e, t) { if (t.length) for (var n, r = 0; n = t[r]; r += 1)s(e, n); else s(e, t) }(m, b), m });
var lazy = new LazyLoad({
    elements_selector: ".lazyload"
});
function toReal(value, str_cifrao) {
    return str_cifrao + ' ' + value.formatMoney(2, ',', '.');
}
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(d{3})(?=d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var theme = {
    header: function(){
        jQuery('.footer .title').click(function(){
            jQuery(this).toggleClass('active');
        });

        jQuery('.bar-top .rastreio span').click(function(){
            jQuery(this).next().toggleClass('active');
        });

        jQuery('.rastreie input').keyup(function(){
            var text = jQuery(this).parent().attr('data-action').replace('{query}', jQuery(this).val());
            jQuery(this).parent().attr('action', text);
        });

        jQuery(document).click(function(event) {
            if (!jQuery(event.target).closest(".rastreio").length) {
                jQuery(".rastreio .modal-white").removeClass('active');
            }
        });

        jQuery('.list-nav > li .sub').click(function(e){
            e.preventDefault();
            jQuery(this).toggleClass('active');
            jQuery(this).next().toggleClass('active');
        });

        jQuery('.header .menu').click(function(){
            jQuery('.nav-mobile').addClass('active');
        });

        jQuery('.sidebar-category .sub-filter').click(function(e){
            jQuery(this).toggleClass('active');
        });

        jQuery('.sidebar-category li.sub .sub-filter').click(function(e){
            e.preventDefault();
        });

        jQuery('.video-button').click(function(){
            jQuery('.video-modal').addClass('active').find('[data-src]').attr('data-src', jQuery(this).data('url'));
            var video = new LazyLoad({
                elements_selector: ".iframe-lazy",
            });
        });

        jQuery('.video-modal .shadow, .video-modal .close-icon').click(function() {
            setTimeout(function () {
                jQuery('.video-modal .video iframe').removeAttr('src').removeClass('loaded').removeAttr('data-was-processed');
            },300)
            
        });

        this.sidebar();
        this.scrollHeader();

        var fixed = true;

        if(!jQuery('.header .menu').is(':visible')){
            this.scrollHeader();
            // fixed = false;
        }

        // jQuery(window).resize(function() {
        //     if((!jQuery('.header .menu').is(':visible')) && fixed){
        //         fixed = false;
        //         theme.scrollHeader();
        //     }
        // });
        
        
    },

    breadcrumbs: function (){
        if(!jQuery('.breadcrumb').length && !jQuery('html.page-register,html.page-login').length){
            jQuery('.page-content > .container, .breadcrumb-container').prepend('\
            <nav aria-label="breadcrumb">\
                <ol class="breadcrumb">\
                    <li class="breadcrumb-item"><a href="/">Home</a></li>\
                    <li class="breadcrumb-item active" aria-current="page"><span>'+document.title.split(' - ')[0]+'</span></li>\
                </ol>\
            </nav>\
            ')
        }
    },

    scrollHeader: function () {
        // var scrollTop = jQuery('.banner-full').length ? jQuery('.banner-full').outerHeight() : 0;
        var scrollTop = 0;
        var didScroll;
        var lastScrollTop = scrollTop;
        var delta = 5;
        var navbarHeight = jQuery('.header').outerHeight();
        var wrapper = jQuery(".wrapper");

        

        (jQuery(window).scrollTop() > scrollTop) ? wrapper.addClass("fixed") : wrapper.removeClass("fixed");

        jQuery(window).scroll(function () {
            (jQuery(window).scrollTop() > scrollTop) ? wrapper.addClass("fixed") : wrapper.removeClass("fixed");

            didScroll = true;
  
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = jQuery(this).scrollTop();
            
                 
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHeight){
                wrapper.removeClass('show-nav')
                jQuery(".header > .bg > .line").removeClass('show-header')
                jQuery(".header > .bg > .line").addClass('show--fixed')
            } else {
                if(st + jQuery(window).height() < jQuery(document).height()) {
                    wrapper.addClass('show-nav')
                     jQuery(".header > .bg > .line").addClass('show-header')
                    jQuery(".header > .bg > .line").removeClass('show--fixed')
                }
            }
            
            
            lastScrollTop = st;
        }

    },
    sidebar: function(){
        if(!jQuery('.hide-menu').is(':visible')){
            jQuery('.shadow-cart').before(jQuery('.box-fixed').parent().contents());
        }

        jQuery('.button-filter').click(function(){
            jQuery('.box-fixed').addClass('active');
        });
        
        jQuery('.filter__title').click(function(){
            jQuery(this).toggleClass('active');
        });

        jQuery('.filter__label').click(function(){
            setTimeout(function(){
                jQuery('.smart-filter').submit();
            },50)
        });
    },
    resets: function(){
        // busca avancada
        jQuery('.page-search #Vitrine input[type="image"]').after('<button type="submit" class="botao-commerce">BUSCAR</button>');
        jQuery('.page-central_bonus #form_bonus label input.image').after('<button type="submit" class="botao-commerce">Resgatar</button>');

        jQuery('.page-central_bonus #form_bonus label input.image').remove();
        jQuery('.page-search #Vitrine input[type="image"]').remove();
        jQuery('.advancedSearchFormBTimg').addClass('botao-commerce');

        // trocar senha
        jQuery('.page-central_senha input[type="image"]').after('<button type="submit" class="botao-commerce">CONTINUAR</button>').remove();

        // panel
        jQuery('.col-panel .tablePage, .page-extra .page-content table,.page-extras .page-content table, .board_htm table').wrap('<div class="table-overflow"></div>');
        jQuery('.caixa-cadastro #email_cadastro').attr('placeholder', 'Seu e-mail');

        // contact
        jQuery('.page-contact form input[type="image"]').after('<div class="flex justify-end"><button type="submit" class="botao-commerce">ENVIAR</button></div>').remove();
        
        jQuery('.txt-forma-pagamento').each(function(){
            jQuery(this).text(jQuery(this).text().replace(' - Yapay', ''));
        });

        jQuery('#imagem[src*="filtrar.gif"]').after('<button type="submit" class="botao-commerce">Filtrar</button>');
        jQuery('#imagem[src*="filtrar.gif"]').remove();

        jQuery('input[src*="gerarordem.png"]').after('<button type="submit" class="botao-commerce">Gerar ordem de devolu&ccedil;&atilde;o</button>');
        jQuery('input[src*="gerarordem.png"]').remove();
    },
    icPrev: '<div class="arrow prev"><svg class="icon" viewBox="0 0 451.847 451.847">\
        <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0   c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744   c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path>\
    </svg></div>',
    icNext: '<div class="arrow next"><svg class="icon"  viewBox="0 0 451.846 451.847">\
        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>\
    </svg></div>',
    bannerFull: function(){
        if(jQuery('.banner-full .swiper-container').length){
            var config = jQuery('.banner-full').data('config');

            var total = jQuery('.banner-full .swiper-slide').length;

            var paginate = total > 1 ? {
                clickable: true,
                el: '.banner-full .swiper-pagination'
            } : false;

            var swiper = new Swiper('.banner-full .swiper-container', {
                preloadImages: false,
                effect: config.fade ? 'fade' : 'slide',
                autoplay: {
                    delay: config.time,
                    disableOnInteraction: false
                },
                lazy: {
                    loadPrevNext: true,
                },
                pagination: paginate,
                loop: (total > 1)
            });

            if(config.stop){

                jQuery(".banner-full .swiper-container").hover(function() {
                    (this).swiper.autoplay.stop();
                }, function() {
                    (this).swiper.autoplay.start();
                });
            }
            
        }

        var swiperBanner = new Swiper('.banner .swiper-container', {
            preloadImages: false,
            effect: 'fade',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            loop: true,
            lazy: {
                loadPrevNext: true,
            }
        });
        
    },
    bannerInfo: function(){
        if(jQuery('.banner-info').length){

            var swiperinfo = new Swiper('.banner-info .swiper-container', {
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev',
                },
                loop: true
            });

        }
    },
    slideProduct: function(){    

        if(jQuery('.showcase').length){
            jQuery('.showcase').on('hover', '.product', function() {
                jQuery('.showcase').removeClass('zindex');
                jQuery(this).parents('.showcase').addClass('zindex');
            });
        }

        if(jQuery('.product .second').length){

            if(jQuery('.showcase').length){
                jQuery('body').on('hover', '.product', function(){
                    var img = jQuery(this).find('.second-image');
                    if(!img.hasClass('load')){
                        img.attr('src', img.data('src')).addClass('load');
                    }            
                });
            } else{
                jQuery('.product').hover(function(){
                    var img = jQuery(this).find('.second-image');
    
                    if(!img.hasClass('load')){
                        img.attr('src', img.data('src')).addClass('load');
                    }            
                });
            }
            
        }

        var listSlide = new LazyLoad({
            elements_selector: '.list-slide',
            callback_enter: function (element) {

                var items = jQuery(element).find('.item').length;
                var prev = element.querySelector('.prev');
                var next = element.querySelector('.next');

                if (
                    window.innerWidth > 1280 && items < 4 ||
                    window.innerWidth > 768 && items < 3 ||
                    window.innerWidth > 520 && items < 2 ||
                    items === 1
                ) {
                    prev.remove();
                    next.remove();
                }

                var swiperList = new Swiper(element.querySelector('.swiper-container'), {
                    slidesPerView: 4,
                    lazy: {
                        loadPrevNext: false,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    //loop: items > 4,
                    loop: false,
                    centerInsufficientSlides: items < 4,
                    breakpoints: {
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        520: {
                            slidesPerView: 1,
                        }
                    }
                });
            }
        });

        var listCat = new LazyLoad({
            elements_selector: '.bg-cat',
            threshold: 300,
            callback_enter: function (element) {

                jQuery(element).addClass('show-bg');

                var items = jQuery('.bg-cat .item').length;

                var swiperList = new Swiper(element.querySelector('.swiper-container'), {
                    slidesPerView: 3,
                    lazy: {
                        loadPrevNext: false,
                    },
                    navigation: {
                        nextEl: '.bg-cat .next',
                        prevEl: '.bg-cat .prev',
                    },
                    loop: false,
                    breakpoints: {
                        1440: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        
                        },
                        768: {
                            slidesPerView: 1,
                        }
                    }
                });
            }
        });

        setTimeout(function(){

            var select = '.section-brands';

            var brand = new LazyLoad({
                elements_selector: select,
                threshold: 300,
                callback_enter: function (element) {

                    var swiper = new Swiper('.slide-brand', {
                        preloadImages: false,
                        slidesPerView: 6,
                        spaceBetween: 0,
                        lazy: true,
                        navigation: {
                            nextEl: '.slide-brand .next',
                            prevEl: '.slide-brand .prev',
                        },
                        breakpoints: {
                            1024: {
                              slidesPerView: 4
                            },
                            768: {
                              slidesPerView: 3
                            },
                            640: {
                              slidesPerView: 2,
                            },
                            320: {
                              slidesPerView: 1,
                            //   spaceBetween: 10,
                            }
                        }
                    });
                }
            });

        },50)
        
        jQuery('#form-comments #bt-submit-comments').before('<button class="botao-commerce">Enviar</button>').remove();
    },
    image: function(value, element){
        typeof element == 'object' ? element = jQuery(element) : console.error('not type object');
        ;
        var result = ((element.height() - element.width()) / element.width()) * 100;
        (result > value) ? element.addClass('vertical') : element.addClass('horizontal');
    },
    getAjax: function(method,url,data,response){
        jQuery.ajax({
            method: method,
            url: url,
            data: data,
            async: true,
        }).success(function( value ) {
            response(value);
        });
    },
    shipping: function(){
        jQuery('.crazy_cep').mask('00000-000');
        
        var quantidade = 1;
  
        jQuery('.new-frete').submit(function(e){
            e.preventDefault();
            
            if(jQuery('#quant:visible').is(':visible')){
                quantidade = jQuery('#quant:visible').val();
            }

            var url2 = jQuery('#shippingSimulatorButton').attr('data-url');

            var cep = jQuery(this).find('input').val().split('-');
            var variant = jQuery('#product-container').find('#selectedVariant').val() ? jQuery('#product-container').find('#selectedVariant').val() : 0;

            url2 = url2.replace('cep1=%s','cep1='+cep[0])
            .replace('cep2=%s','cep2='+cep[1])
            .replace('acao=%s','acao=' + variant)
            .replace('dade=%s','dade=' + quantidade);

            if(jQuery('#selectedVariant').val() !== ''){
                jQuery('.box-frete .result').html('<div class="load-css"><div class="icon"></div></div>');
                theme.getAjax('get',url2,{},function(response){
                    jQuery('.box-frete .result').html(response);
        
                    jQuery('.box-frete .result').find('table:first, p').remove();
                    jQuery('.box-frete .result').find('img').parent().remove();

                    jQuery('.box-frete .result').find('th:last').text('Prazo:');
                
                    jQuery('.box-frete .result').find('th[colspan="2"]').removeAttr('colspan');
                    jQuery('.box-frete .result').find('[width]').removeAttr('width');

                    if (jQuery('.box-frete .result').find('tr').length == 1) {
                        jQuery('.box-frete .result').find('tr').after('<tr><td colspan="3">N&atilde;o foi encontrado formas de envio para o CEP</td></tr>');
                        jQuery('.box-frete .result').find('tr:first').remove();
                    }
                });
            }
            else{
                jQuery('.box-frete .result').html('Escolha uma varia&ccedil;&atilde;o');
            }
    
        });
    },
    startZoom: function(){

        jQuery('.nav-images .list').slick({
            dots: false,
            arrows: true,
            prevArrow: this.icPrev,
            nextArrow: this.icNext,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.image-show .list',
            focusOnSelect: true,
        });


        jQuery('.image-show .list').slick({
            asNavFor: '.nav-images .list',
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            useTransform: true,
            lazyLoad: 'ondemand',
            autoHeight: false,
        }).on('afterChange', function(e,v,c){

            // jQuery('.nav-images .list').on('setPosition', v.currentSlide);

            var indice = v.currentSlide;
            indice += 1;
            var select = jQuery('.image-show').find('.box-img[data-id="'+indice+'"] .zoom');
            if(!select.find('img:first').next().length){

                select.zoom({
                    touch: false,
                    url: select.find('img').attr('data-src'),
                });
                
            }
        });       

        jQuery('.image-show').find('.box-img[data-id="1"] .zoom').zoom({touch: false});
        
    },
    removeZoom: function(images){
        jQuery('.nav-images .list,.image-show .list').slick('unslick');

        jQuery('.nav-images .list,.image-show .list').find('.item').remove();

        images.forEach(function(val, index){
            var idIndice = ++index;

            jQuery('.nav-images .list').append('<div class="item"><div class="box-img" data-id="'+idIndice+'">\
                <img src="'+val.thumbs[90].https+'" alt="image">\
            </div></div>');

            jQuery('.image-show .list').append('\
            <div class="item">\
            <div class="box-img" data-id="'+idIndice+'">\
                <div class="zoom">\
                    <img data-lazy="'+val.https+'" alt="image">\
                </div>\
            </div></div>');
        });

        this.startZoom();
    },
    tabs: function() {
        jQuery('[data-id*="AbaPersonalizada"]').each(function() {
            var el = jQuery(this).data('id');
            jQuery(el).removeAttr('style').appendTo(jQuery(this));
        });

        jQuery('.section-box.comments').appendTo('.comments-modal .append');

        jQuery('.list-star.cursor').click(function() {
            jQuery('.comments-modal').addClass('active');
        });

        jQuery('.ranking .rating').each(function() {
            var av = Number(jQuery(this).attr('class').replace(/[^0-9]/g,''));

            for (i = 1; i <= 5; i++){
                if(i <= av){
                    jQuery(this).append('<div class="icon active"></div>');
                } else {
                    jQuery(this).append('<div class="icon"></div>');
                }

            }
        });
    },
    addSubtractButtons: function () {
        // Add and subtract buttons on product page
        const form = jQuery('#form_comprar');

        if(form.length){
            const template = '' +
                '<span class="add-subtract-buttons">' +
                    '<a class="add" title="Aumentar a quantidade">' +
                        '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M17.9999 26.64C17.7116 26.64 17.4599 26.5317 17.2433 26.3166L2.12334 11.1966C1.69163 10.7649 1.69163 10.08 2.12334 9.68485C2.55506 9.25314 3.23992 9.25314 3.63506 9.68485L17.9998 24.0481L32.3631 9.68485C32.7948 9.25314 33.4796 9.25314 33.8748 9.68485C34.3065 10.1166 34.3065 10.8014 33.8748 11.1966L18.7548 26.3166C18.5396 26.5317 18.2879 26.64 17.9996 26.64H17.9999Z"/>' +
                        '</svg>' +
                    '</a>' +
                    '<a class="subtract" title="Diminuir a quantidade">' +
                        '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M17.9999 26.64C17.7116 26.64 17.4599 26.5317 17.2433 26.3166L2.12334 11.1966C1.69163 10.7649 1.69163 10.08 2.12334 9.68485C2.55506 9.25314 3.23992 9.25314 3.63506 9.68485L17.9998 24.0481L32.3631 9.68485C32.7948 9.25314 33.4796 9.25314 33.8748 9.68485C34.3065 10.1166 34.3065 10.8014 33.8748 11.1966L18.7548 26.3166C18.5396 26.5317 18.2879 26.64 17.9996 26.64H17.9999Z"/>' +
                        '</svg>' +
                    '</a>' +
                '</span>';

            setTimeout(function (){
                jQuery('#quantidade').after(template);
            }, 1000);

            if (!form.find('.add-subtract-buttons').length) {

                let quantityInput = form.find('#quant');

                form.on('focusout', '#quant', function(){
                    quantityInput.val(Number(quantityInput.val()) === 0 ? 1 : quantityInput.val());
                });

                form.on('click', '.add-subtract-buttons .add', function(){
                    quantityInput = form.find('#quant');
                    quantityInput.val(Number(quantityInput.val()) + 1);
                });

                form.on('click', '.add-subtract-buttons .subtract', function(){
                    quantityInput = form.find('#quant');
                    quantityInput.val(Number(quantityInput.val()) <= 1 ? 1 : Number(quantityInput.val()) - 1);
                });
            }
        }

    },
    productVariant: function(){
        this.tabs();
        jQuery('.compreJunto form .fotosCompreJunto').append('<div class="plus color to">=</div>');
        jQuery('.box-variants').on('click','.lista_cor_variacao li[data-id]', function(){
            var url = "/web_api/variants/" + jQuery(this).data('id');

            theme.getAjax('get',url,{},function(response){
                var images = response.Variant.VariantImage;

                if(images.length){
                    theme.removeZoom(images);
                }
            });
            theme.addSubtractButtons();
        });
        
        jQuery('.box-variants').on('click','.lista-radios-input', function(){
            var url = "/web_api/variants/" + jQuery(this).find('input').val();

            theme.getAjax('get',url,{},function(response){
                var images = response.Variant.VariantImage;

                if(images.length){
                    theme.removeZoom(images);
                }
            });
            theme.addSubtractButtons();
        });

        jQuery('.box-variants').on('change', 'select', function(){
            var url = "/web_api/variants/" + jQuery(this).val();
            theme.getAjax('get',url,{},function(response){
                var images = response.Variant.VariantImage;

                if(images.length){
                    theme.removeZoom(images);
                }
            });
            theme.addSubtractButtons();
        });

        jQuery('.produto img').each(function(){
            jQuery(this).attr('src', jQuery(this).attr('src').replace('/90_', '/'));
            
            var href = '';
            if(jQuery(this).parent().attr('href') !== ''){
                href = 'href="'+jQuery(this).parent().attr('href') + '"';
            } 
            
            jQuery(this).parents('span').after('<a '+href+' class="product-name">'+jQuery(this).attr('alt')+'</a>');
        });

        jQuery('.page-product').on('click','#detalhes_formas',function(){
            var productId = jQuery('#form_comprar').data('id');
            var price = jQuery('#preco_atual').val();

            var link = '/mvc/store/product/payment_options_details?loja='+theme.storeId()+'&IdProd='+productId+'&preco='+price;
            jQuery('.payment-modal').addClass('active');

            jQuery('.payment-modal .append').html('<div class="load-css"><div class="icon"></div></div>');

            theme.getAjax('get',link,{},function(response){
                jQuery('.payment-modal .append').html(response).find('.tablePage').wrap('<div class="overflow-payment"></div>');
            });
        });

        jQuery('#form_comprar').bind('submit',function(){

            if (!jQuery('.labelMultiVariacao').length) {

                if(jQuery('#selectedVariant').length && !jQuery('#selectedVariant').val()){
                    jQuery("#span_erro_carrinho").css("display","block");
                    return false;
                }
            }

            jQuery('#loading-product-container').show();

            var interval = setInterval(function(){
                if(jQuery('.cart-preview-loading-modal').hasClass('tray-hide')){
                    jQuery('body').find('.modal-backdrop').hide();
                    cart.showCart();
                    jQuery('#loading-product-container').hide();
                    jQuery('body').removeClass('modal-open').removeAttr('style');
                    clearInterval(interval);
                }
            },50);                
        });

        jQuery('.compreJunto form').bind('submit.botao-compre-junto',function(){

            var form = jQuery(this);

            if(!form.find('.blocoAlerta').is(':visible')){
                jQuery('#loading-product-comprejunto').show();
                jQuery('body').removeClass('modal-open').removeAttr('style');
                jQuery('body').find('.modal-backdrop').remove();

                var interval = setInterval(function(){
                    if(jQuery('.cart-preview-loading-modal').hasClass('tray-hide')){
                        cart.showCart();
                        jQuery('#loading-product-comprejunto').hide();
                        jQuery('body').find('.botao-continuar-comprando .botao-commerce-img').trigger('click');
                        clearInterval(interval);
                    }
                },50);        
            }        
        });

        var secondSelect = jQuery('#variation_second_select').prev();
        var firstSelct = jQuery('[data-tray-tst="variation_first_select"]');

        if(secondSelect.is(':visible') && !firstSelct.val()){
            secondSelect.hide();
        }

        firstSelct.change(function(){
            secondSelect.show();
        });


    },
    forVisited: function(list) {

        var template = '<div class="product show-down">\
            <div class="image">\
                <a href="{link}" class="space-image">\
                    <img class="swiper-lazy transform" src="{image}">\
                </a>\
            </div>\
            <a href="{link}" class="info-product">\
                <div class="product-name">{name}</div>\
                <div class="down-line">{boxPrice}</div>\
            </a>\
            <div class="variants">\
                <a href="{link}" class="btn btn-white btn-block">Comprar produto</a>\
            </div>\
        </div>';

        var priceBefore = '<div class="price-before"><span class="line-price">{price}</span></div>';

        var boxPrice = '<div class="box-price">\
            <div class="price">\
                <div class="product-price">\
                    {before}\
                    <span class="price-off">{price}</span>\
                </div>\
            </div>\
            <div class="product-payment">{payment}</div>\
        </div>';


        var listNode = jQuery('.visited-section .list-append');

        var itemsList = '';

        list.forEach(function(v){
            var product = v.Product;

            //console.log(product);

            var item = template.replace(/{link}/g, product.url.https)
            .replace(/{image}/g, product.ProductImage[0].https)
            .replace(/{name}/g, product.name)

            var priceProtion = Number(product.promotional_price);
            
            if(product.available && Number(product.price)){
                item = item.replace('{boxPrice}', boxPrice
                    .replace('{before}',priceProtion ? priceBefore.replace('{price}', toReal(Number(product.price), 'R$')) : '')
                    .replace('{price}', priceProtion ? toReal(priceProtion, 'R$') : toReal(Number(product.price), 'R$')))
                .replace('{payment}', product.payment_option_html);
            } else{
                item = item.replace('{boxPrice}', product.available ? '<div class="box-price"><div class="price"><div class="product-price"><p>Sob Consulta</p></div></div></div>' : '<div class="box-price"><div class="price"><div class="product-price"><p>Indispon&iacute;vel</p></div></div></div>');
            }

            itemsList += '<div class="item swiper-slide">'+item+'</div>';

        });

        var result = '<div class="swiper-container"><div class="swiper-wrapper list-product">'+itemsList+'</div></div>';


        listNode.append(result);

        var listSlide = new LazyLoad({
            elements_selector: '.list-append .swiper-container',
            threshold: 300,
            callback_enter: function (element) {

                var items = jQuery(element).find('.item').length;
                var prev = jQuery('.visited-section .prev');
                var next = jQuery('.visited-section .next');

                if (
                    window.innerWidth > 1280 && items < 4 ||
                    window.innerWidth > 768 && items < 3 ||
                    window.innerWidth > 520 && items < 2 ||
                    items === 1
                ) {
                    prev.remove();
                    next.remove();
                }

                var swiperList = new Swiper(element, {
                    slidesPerView: 4,
                    centerInsufficientSlides: true,
                    lazy: {
                        loadPrevNext: false,
                    },
                    navigation: {
                        prevEl: prev,
                        nextEl: next,
                    },
                    // loop: items > 4,
                    loop: false,
                    breakpoints: {
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        520: {
                            slidesPerView: 1,
                        }
                    }
                });
            }
        });

        

    },
    productVisited: function(){
        var url = "/web_api/products/"+jQuery('#form_comprar').data('id');
        var visited = localStorage.getItem('visited');

        var list = [];
        
        if(visited){
            list = JSON.parse(visited).reverse();
        }

        list.length ? theme.forVisited(list) : jQuery('.visited-section').remove();

        if(list.length == 10){
            list.pop();

            list.reverse();
        }

        theme.getAjax('GET', url, {}, function(response){

            var valid = true;

            list.forEach(function(val) {
                
                if(val.Product.id == response.Product.id){
                  valid = false;
                }
            });

            if(valid){
                list.push(response);
                
                var result = JSON.stringify(list);
    
                localStorage.setItem('visited',result);
            }
          
        });

    },
    storeId: function(){
        return jQuery('html').attr('data-store');
    },
    depoimento: function(){
        jQuery('#depoimento a').prepend('<div class="botao-commerce">ENVIAR</div>');
        jQuery('.page-content h2:first').appendTo('.depoimentos-modal .append');
        jQuery('.page-content h2:last').remove();
        jQuery('#comentario_cliente').appendTo('.depoimentos-modal .append');
        
        jQuery('.page-content .container').append('<div class="botao-commerce depoimento-event">Deixe seu depoimento</div>');
        
        jQuery('.botao-commerce.depoimento-event').click(function(){
            jQuery('.depoimentos-modal').addClass('active');
        });
    },
    present: function(){
        jQuery('#form_presentes input[type="image"]').prev().html('<div class="botao-commerce">Continuar Comprando</div>');
        jQuery('#form_presentes input[type="image"]').wrap('<div class="relative-button"></div>').after('<button class="botao-commerce">Avan&ccedil;ar</button>').remove();
    },
    slideCatalog: function(){
        jQuery('.slide-catalog').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            useTransform: true,
            lazyLoad: 'ondemand'
        });
    },
    newsletter: function() {
        var checkCookie = getCookie('modal-news');

        var modal = jQuery('.email-modal');

        if(modal.hasClass('exit-window') && !checkCookie){
            jQuery('html').mouseleave(function() {
                if(!modal.hasClass('loaded')){                    
                    jQuery('.modal-box .image img').attr('src', jQuery('.modal-box .image img').attr('data-src'));
                    setInterval(function() {
                        modal.addClass('active');
                        setCookie('modal-news', 'true', 5);
                    },200);
                }
            });
        }

        if(modal.hasClass('last-time') && !checkCookie){
            setInterval(function() {
                modal.addClass('active');
                setCookie('modal-news', 'true', 5);
                jQuery('.modal-box .image img').attr('src', jQuery('.modal-box .image img').attr('data-src'));
            },20000);
        }
        if(modal.hasClass('init-start') && !checkCookie){
            modal.addClass('active');
            setCookie('modal-news', 'true', 5);
            jQuery('.modal-box .image img').attr('src', jQuery('.modal-box .image img').attr('data-src'));
        }

        /* jQuery('.email-modal form').submit(function(e) {
            e.preventDefault();

            jQuery(this).find('button').addClass('load');

            var serialize = jQuery(this).serialize();

            theme.getAjax('POST', '/mvc/store/newsletter/', serialize, function(result) {
                jQuery('.modal-box .box-text > div').html('<div class="success-news"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.834 345.834"><path d="M339.798,260.429c0.13-0.026,0.257-0.061,0.385-0.094c0.109-0.028,0.219-0.051,0.326-0.084c0.125-0.038,0.247-0.085,0.369-0.129c0.108-0.039,0.217-0.074,0.324-0.119c0.115-0.048,0.226-0.104,0.338-0.157c0.109-0.052,0.22-0.1,0.327-0.158c0.107-0.057,0.208-0.122,0.312-0.184c0.107-0.064,0.215-0.124,0.319-0.194c0.111-0.074,0.214-0.156,0.321-0.236c0.09-0.067,0.182-0.13,0.27-0.202c0.162-0.133,0.316-0.275,0.466-0.421c0.027-0.026,0.056-0.048,0.083-0.075c0.028-0.028,0.052-0.059,0.079-0.088c0.144-0.148,0.284-0.3,0.416-0.46c0.077-0.094,0.144-0.192,0.216-0.289c0.074-0.1,0.152-0.197,0.221-0.301c0.074-0.111,0.139-0.226,0.207-0.34c0.057-0.096,0.118-0.19,0.171-0.289c0.062-0.115,0.114-0.234,0.169-0.351c0.049-0.104,0.101-0.207,0.146-0.314c0.048-0.115,0.086-0.232,0.128-0.349c0.041-0.114,0.085-0.227,0.12-0.343c0.036-0.118,0.062-0.238,0.092-0.358c0.029-0.118,0.063-0.234,0.086-0.353c0.028-0.141,0.045-0.283,0.065-0.425c0.014-0.1,0.033-0.199,0.043-0.3c0.025-0.249,0.038-0.498,0.038-0.748V92.76c0-4.143-3.357-7.5-7.5-7.5h-236.25c-0.066,0-0.13,0.008-0.196,0.01c-0.143,0.004-0.285,0.01-0.427,0.022c-0.113,0.009-0.225,0.022-0.337,0.037c-0.128,0.016-0.255,0.035-0.382,0.058c-0.119,0.021-0.237,0.046-0.354,0.073c-0.119,0.028-0.238,0.058-0.356,0.092c-0.117,0.033-0.232,0.069-0.346,0.107c-0.117,0.04-0.234,0.082-0.349,0.128c-0.109,0.043-0.216,0.087-0.322,0.135c-0.118,0.053-0.235,0.11-0.351,0.169c-0.099,0.051-0.196,0.103-0.292,0.158c-0.116,0.066-0.23,0.136-0.343,0.208c-0.093,0.06-0.184,0.122-0.274,0.185c-0.106,0.075-0.211,0.153-0.314,0.235c-0.094,0.075-0.186,0.152-0.277,0.231c-0.09,0.079-0.179,0.158-0.266,0.242c-0.099,0.095-0.194,0.194-0.288,0.294c-0.047,0.05-0.097,0.094-0.142,0.145c-0.027,0.03-0.048,0.063-0.074,0.093c-0.094,0.109-0.182,0.223-0.27,0.338c-0.064,0.084-0.13,0.168-0.19,0.254c-0.078,0.112-0.15,0.227-0.222,0.343c-0.059,0.095-0.12,0.189-0.174,0.286c-0.063,0.112-0.118,0.227-0.175,0.342c-0.052,0.105-0.106,0.21-0.153,0.317c-0.049,0.113-0.092,0.23-0.135,0.345c-0.043,0.113-0.087,0.225-0.124,0.339c-0.037,0.115-0.067,0.232-0.099,0.349c-0.032,0.12-0.066,0.239-0.093,0.36c-0.025,0.113-0.042,0.228-0.062,0.342c-0.022,0.13-0.044,0.26-0.06,0.39c-0.013,0.108-0.019,0.218-0.027,0.328c-0.01,0.14-0.019,0.28-0.021,0.421c-0.001,0.041-0.006,0.081-0.006,0.122v46.252c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-29.595l66.681,59.037c-0.348,0.245-0.683,0.516-0.995,0.827l-65.687,65.687v-49.288c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v9.164h-38.75c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h38.75v43.231c0,4.143,3.357,7.5,7.5,7.5h236.25c0.247,0,0.494-0.013,0.74-0.037c0.115-0.011,0.226-0.033,0.339-0.049C339.542,260.469,339.67,260.454,339.798,260.429z M330.834,234.967l-65.688-65.687c-0.042-0.042-0.087-0.077-0.13-0.117l49.383-41.897c3.158-2.68,3.546-7.412,0.866-10.571c-2.678-3.157-7.41-3.547-10.571-0.866l-84.381,71.59l-98.444-87.158h208.965V234.967z M185.878,179.888c0.535-0.535,0.969-1.131,1.308-1.765l28.051,24.835c1.418,1.255,3.194,1.885,4.972,1.885c1.726,0,3.451-0.593,4.853-1.781l28.587-24.254c0.26,0.38,0.553,0.743,0.89,1.08l65.687,65.687H120.191L185.878,179.888z"/><path d="M7.5,170.676h126.667c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.357-7.5,7.5S3.357,170.676,7.5,170.676z"/><path d="M20.625,129.345H77.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H20.625c-4.143,0-7.5,3.357-7.5,7.5S16.482,129.345,20.625,129.345z"/><path d="M62.5,226.51h-55c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h55c4.143,0,7.5-3.357,7.5-7.5S66.643,226.51,62.5,226.51z"/></svg><span>E-mail cadastrado com sucesso.</div>');

                modal.addClass('loaded');
                setTimeout(function() {
                    jQuery('.success-news').addClass('show');
                }, 20);
                
            });    
            
        });
        */ 
    
        jQuery('.email-modal .close-icon,.email-modal .shadow').bind('click', function() {

            setCookie('modal-news', 'true', 5);

            modal.addClass('loaded');
        });
    },
    organizeNewsletterPage: function(){

        if(jQuery('.page-newsletter .formulario-newsletter').length){

            jQuery('.page-newsletter .formulario-newsletter .box-captcha-newsletter input').attr('placeholder', 'Digite o c�digo ao lado');
            jQuery('.formulario-newsletter .newsletterBTimg').html('Confirmar').removeClass().addClass('botao-commerce');

        } else {

            jQuery('.page-newsletter .page-content').addClass('success-message-newsletter');
            jQuery('.page-newsletter .page-content.success-message-newsletter .board p:first-child a').addClass('botao-commerce').html('Voltar para p&aacute;gina inicial');

        }

        setTimeout(function () {
            jQuery('.page-newsletter .page-content').addClass('show');
        }, 200);

    },
    organizeStoreReviewsPage: function(){
        
        jQuery('.page-content .container').append('<div class="botao-commerce depoimento-event">Deixe seu depoimento</div>');
        jQuery('#depoimento #aviso_depoimento').after('<button type="button" class="botao-commerce send-store-review">Enviar</button>');

        jQuery('.page-content h2:first').appendTo('.depoimentos-modal .append');
        jQuery('#depoimento').appendTo('.depoimentos-modal .append');

        jQuery('#comentario_cliente').remove();
        jQuery('.depoimentos-modal .append #depoimento a').remove();
        
        jQuery('.botao-commerce.depoimento-event').click(function(){
            jQuery('.depoimentos-modal').addClass('active');
        });

    },
    validateStoreReviewForm: function(){

        jQuery('.depoimentos-modal #depoimento').validate({
            rules: {
                nome_depoimento :{
                    required: true
                },
                email_depoimento :{
                    required: true,
                    email: true
                },
                msg_depoimento: {
                    required: true
                },
                input_captcha: {
                    required: true
                }
            },
            messages: {
                nome_depoimento :{
                    required: "Por favor, informe seu nome completo",
                },
                email_depoimento:{
                    required : "Por favor, informe seu e-mail",
                    email    : "Por favor, preencha com um e-mail v�lido",
                },
                msg_depoimento: {
                    required: "Por favor, escreva uma mensagem no seu depoimento",
                },
                input_captcha: {
                    required: "Por favor, preencha com o c�digo da imagem de verifica��o"
                }
            },
            errorElement : 'span',
            errorClass   : 'error-block',
            errorPlacement: function(error, element){

                if(element.prop('type') === 'radio'){
                    error.insertAfter(element.parent('.nota_dep'));
                }

                else if(element.is('textarea')){
                    error.insertAfter(element.parent().find('h5'));
                }

                else {
                    error.insertAfter(element);
                }
            }
        } );


        jQuery('.depoimentos-modal #depoimento .send-store-review').on('click', function () {

            let form       = jQuery('.depoimentos-modal #depoimento');
            let button     = jQuery(this);
            let buttonText = jQuery(this).html();

            if(form.valid()){

                button.html('Enviando...').attr('disabled', true);
                jQuery('#aviso_depoimento').html('');            

                jQuery.ajax({
                    url      : form.prop('action'),
                    method   : form.prop('method'),
                    data     : form.serialize(),
                    dataType : 'json',
                    success : function (){

                        form.before('<div class="blocoSucesso">Depoimento enviado com sucesso! Seu depoimento aparecer� assim que aprovado. A p�gina ser� recarregada em instantes.</div>').remove();
                        jQuery('.depoimentos-modal h2').remove();

                        setTimeout(function(){
                            document.location.reload();
                        }, 8000)

                    },
                    error: function(request, status, error){

                        jQuery('#aviso_depoimento').html('<div class="error-message">Ocorreu um problema ao enviar seu depoimento. Recarregue a p�gina e tente novamente. Se o problema persistir, entre em contato conosco.</div>')
                        console.error(`[Theme] Could not send store review. Details: ${error}`);
                    },
                    complete: function(){
                        button.html(buttonText).removeAttr('disabled');
                    }
                });

            }
        });

    }
}

var cart = {
    session: function () {
        return jQuery("html").attr("data-session");
    },
    idStore: function(){
        return jQuery("html").attr("data-store");
    },
    removeProduct: function (element){
        var id = parseInt(jQuery(element).attr('data-id'));
        var variant = '/'+jQuery(element).attr('data-variant');
        var addText = jQuery(element).attr('data-add') == "" ? '' : "/?additional_information=" + jQuery(element).attr('data-add').replace(/br>/g, 'br/>');
        var together = jQuery(element).attr('data-together') !== '' ? '/'+jQuery(element).attr('data-together') : ''; 

        jQuery.ajax({
            method: "DELETE",
            url: "/web_api/carts/" + cart.session() + "/" + id + variant + together + addText
        }).success(function (response) {
            //console.log(response);
            cart.listProduct();
        }).fail(function (error) {
            //console.log("error remove product: ", error.responseText);
            cart.listProduct();
        });
    },
    listProduct: function(){
        // cart.removeCart();

        jQuery.ajax({
            method: "GET",
            url: "/web_api/cart/"+cart.session(),
        }).done(function( response, textStatus, jqXHR ) {
            //console.log(response);

            var forList = response;
            var addList = [];

            forList.forEach(function(list){
                addList.push(list.Cart);
            });

            //console.log(addList);
            cart.forProduct(addList);
        }).fail(function( jqXHR, status, errorThrown ){
            cart.forProduct([]);
        });
    },
    number: function(number){
        jQuery('.cart-header [data-cart]').text(number);
    },
    total: function(price){
        jQuery('.cart-sidebar .total .value').text(toReal(parseFloat(price), 'R$'));
    },
    forProduct: function (listProducts) {
        var listDom = jQuery('.cart-sidebar .content-cart .list');
        listDom.find('*').remove();
        listDom.parent().removeClass('empty');

        jQuery('.modal-theme').removeClass('active');

        jQuery('.cart-header').addClass('active');

        var button = jQuery('.cart-header .buy');

        var https = button.attr('href')

        var checkout = https+'/checkout?session_id='+cart.session()+'&store_id='+cart.idStore();
        button.attr('href', checkout);
        var qnt = 0;
        var total = 0.0;

        var listId = [];
        if (listProducts.length){

            listProducts.forEach(function (product) {

                var addMsg = product.additional_information.replace(/\//g, '');
                prices = product;
                // product.productImage.thumbs[90].https;
                listDom.append(
                    cart.templateProduct(
                        product.product_id,
                        product.variant_id,
                        product.product_name,
                        product.product_image.thumbs[90].https,
                        product.quantity,
                        product.price,
                        product.product_url.https,
                        addMsg,
                        product.additional_info_kit,
                        product.bought_together_id));
                qnt += parseInt(product.quantity);

                total += (parseFloat(product.price) * parseInt(product.quantity));
            
                listId.push(parseInt(product.product_id));
                
            });
            cart.number(qnt);
            cart.total(total);
            
        } else{
            listDom.append('<div class="error"><div clas="text">Carrinho Vazio</div><a href="/produtos" class="btn btn-block btn-secondary mt-2">Ver produtos</a></div>');
            listDom.parent().addClass('empty');
            cart.number(0);

            jQuery('body').find('.add-cart .buy-product').each(function(){
                if(jQuery(this).hasClass('active')) jQuery(this).removeClass('active').find('.text').text('Comprar');
            });
        }
    },
    startCart: function () {
        jQuery('.cart-header .header-link').click(function(){

            if(jQuery(this).parent().hasClass('active')){
                jQuery('.cart-header').removeClass('active');
            } else {
                cart.showCart();
            }
            
        });
        
        jQuery('.shadow-cart, .shadow-cart-header, .box-prev, .close-nav,.box-fixed .close-box,.close-modal,.close-icon,.modal-theme .shadow').click(function(e){
            jQuery('.cart-sidebar, .nav-mobile,.box-fixed,.modal-theme,.cart-header').removeClass('active');
        });

        this.initAdd();

        // add product variant
        jQuery('.product-submit').submit(function(e){
            e.preventDefault();
            var variant = jQuery(this).find('.select').val();
            var quantity = jQuery(this).find('.quantity').val();
            var product_id = jQuery(this).find('.quantity').attr('data-id');
            if(variant) cart.addVariantComplete(variant, quantity, product_id);
        });

        jQuery('.remove-items').click(function() {
            cart.removeCart();
        });
        
    },
    removeCart: function() {
        jQuery.ajax({
            method: "DELETE",
            url: "/web_api/carts/" + cart.session()
        }).success(function (response) {
            cart.listProduct();
        }).fail(function (error) {
            cart.listProduct();
        });
    },
    showCart: function(){
        cart.listProduct();
        
        if(jQuery('.header .menu').is(':visible')){
            jQuery('html, body').animate({
                scrollTop: 0
            });
        }

    },
    templateProduct: function (id,variant,name,image,qnt,price,url,addMsg,infoKit,together) {
        var template = '\
            <div class="item">\
                <div class="box-cart flex align-center">\
                    <div class="box-image">\
                        <a href="{url}" class="image">\
                            <img src="{image}" alt="{name}">\
                        </a>\
                    </div>\
                    <div class="info-product">\
                        <div class="line-top">\
                            <a href="{url}" class="name t-color">{name}</a>\
                        </div>\
                        <div class="line-down d-flex justify-content-between">\
                            <div class="price">{price}</div>\
                            <div class="d-flex">\
                                <div class="qnt me-1">x{length}</div>\
                                <div class="remove" data-id="{id}" data-together="{together}" data-variant="{variant}" data-add="{addMsg}" onclick="cart.removeProduct(this)">\
                                    <span class="ic-trash"></span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        ';

        template = template.replace(/{url}/g,url);
        template = template.replace(/{image}/g,image);
        template = template.replace(/{name}/g,name);
        template = template.replace(/{id}/g,id);
        template = template.replace(/{variant}/g,variant);
        template = template.replace(/{length}/g,qnt);
        template = template.replace(/{addMsg}/g,addMsg);
        template = template.replace(/{together}/g,together);
        price = toReal(parseFloat(price), 'R$');
        template = template.replace(/{price}/g,price);
        return template;
    },
    addVariantComplete: function(variant, quantity, productId){
        var customerId = dataLayer[0].customerId ? dataLayer[0].customerId : 0;

        jQuery.ajax({
            method: "POST",
            url: "/web_api/cart/",
            contentType: "application/json; charset=utf-8",
            data:'{"Cart":{"session_id":"' + cart.session() + '","product_id":"' + productId + '","quantity":"' + quantity + '","variant_id":"' + variant + '"}}'
        }).success(function( response, textStatus, jqXHR ) {
            cart.showCart();
        }).fail(function( jqXHR, status, errorThrown ){
            window.location.href = jQuery('.modal-product').find('.name a').attr('href');
        });
    },
    filterVariant: function(variants, selects){
        var i = 0;

        var select = selects.eq(0).val();

        if(!!select){
            var select2 = selects.eq(1).val();
            while(i < variants.length){
                if(variants[i].option == select && variants[i].option2 == select2){                    
                    return variants[i];
                }
                i++;
            }
        }
        return 500;
    },
    stockAlert: function(e){
        var variant = cart.filterVariant(jQuery(e).data('variants'), jQuery(e).find('select'));
        var quant = Number(e.find('input[type="number"]').val());
    
        e.find('input[type="number"]').attr('max', variant.stock).attr('data-variant', variant.id);
    
        var numberFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
        var price = numberFormat.format(variant.price.price);
        var payment = variant.price.payment; 
        //console.log('pre�os: ', price, payment);
    
        e.closest('.product').find('.info-product .down-line .box-price').html('<div class="price-off new-price">'+ price +'</div><div class="product-payment">'+ payment +'</div>');
    
        if(Number(variant.stock) <= 0) {
            jQuery(e).addClass('dont-stock');
        } else{
            jQuery(e).removeClass('dont-stock');
        }
    },
    initAdd: function () {

        jQuery('body').on('change', '.add-cart input', function(){
            var total = Number(jQuery(this).val());
            jQuery(this).val(total > 0 ? total : 1);
        });

        jQuery('body').on('change', '.list-variants select', function() {
            
            if(jQuery(this).hasClass('first')){
                if(jQuery(this).parents('.list-variants').find('.second').val() || !jQuery(this).parents('.list-variants').find('.second').length){
                    cart.stockAlert(jQuery(this).parents('.list-variants'));
                }
            } else{
                if(jQuery(this).parents('.list-variants').find('.first').val()){            
                    cart.stockAlert(jQuery(this).parents('.list-variants'));
                }
            }
            
        });

        jQuery('body').on('submit', '.list-variants', function(e){
            e.preventDefault();

            if(jQuery(this).hasClass('dont-stock')) return false;            
            var id = jQuery(this).data('id');
            var quant = jQuery(this).find('input').val();
            var href = jQuery(this).parents('.product').find('> a').attr('href');
            var variant = jQuery(this).data('variants').length ? jQuery(this).find('input').attr('data-variant') : 0;

            cart.addToCart(id, quant, variant, href);
        });
    },
    submitAdd: function(){
        jQuery('.add-cart-modal form').submit(function(e){
            e.preventDefault();
            var productId = jQuery(this).find('#product_modal').val();
            var quant =jQuery(this).find('#quant_modal').val();
            var variant =jQuery(this).find('#variant_modal');

            if(variant.hasClass('required')){
                jQuery('#alert-modal-add').removeClass('tray-hide')
                return;
            }

            jQuery('.action-add .add-cart').attr('disabled');

            cart.addVariantComplete(variant.val(), quant, productId);
            
        });
    },
    addToCart: function(productId, quantity, variant, href){
        var customerId = dataLayer[0].customerId ? dataLayer[0].customerId : 0;
        jQuery.ajax({
            method: "POST",
            url: "/web_api/cart/",
            contentType: "application/json; charset=utf-8",
            data:'{"Cart":{"session_id":"' + cart.session() + '","product_id":"' + productId + '","quantity":"' + quantity + '","variant_id":"' + variant + '"}}'
        }).success(function() {
            cart.showCart();                   
        }).fail(function( ){
            window.location.href = href;
        });
    },
    ajaxGet: function(url, result){
        jQuery.ajax({
            method: "GET",
            url: url
        }).success(function( response) {
            result(response);
        }).fail(function( jqXHR, status, errorThrown ){
            result({error: true});
            var response = $.parseJSON( jqXHR.responseText );
            //console.log(response);
        });
    }
}

jQuery(document).ready(function(){
    theme.header();
    theme.addSubtractButtons();

    setTimeout(function() {
        theme.newsletter();
        cart.submitAdd();
        theme.slideProduct();
        theme.resets();
    }, 200)

    /*
    if(jQuery("html").is(".page-home")) {
        setTimeout(function() {
            var script = document.createElement('script');
            script.src = jQuery(".section-notices").attr("data-news");
            console.log(script.src)
            script.async = true;
            jQuery("body").append(script);
        }, 1000)
    }
    */


    if(jQuery('.page-contact').length){
        //document.title = 'Fale conosco';

        jQuery('.page-contact .page-content > .container').prepend(
            '<h2>Fale conosco</h2>' +
            '<div class="board d-none">' +
                '<p class="description">Listamos as formas de contato dispon&iacute;veis em nossa loja, estamos ansiosos em lhe atender da melhor maneira poss&iacute;vel.</p>' +
            '</div>' +
            '<div class="row align-items-start mt-2">' +
                '<div class="col-lg-6">' +
                    '<div class="box-form bg-white shadow-sm p-2">' +
                    '</div>' +
                '</div>' +
                '<div class="col-lg-6 mt-3 mt-lg-0">' +
                    '<div class="info-form bg-white shadow-sm p-2"></div>' +
                '</div>' +
            '</div>');

        jQuery(jQuery('.page-content .container3').eq(1)).appendTo('.info-form');
        jQuery(jQuery('.page-content .container3 .container2 .container2').eq(0)).appendTo('.box-form');
        jQuery(jQuery('.page-content > .container > .row ~ *')).remove();

        jQuery(jQuery('.page-content .map-iframe').appendTo('.info-form'));

        jQuery('.page-contact .page-content').addClass('active');

    }
    setTimeout(function() {
        theme.breadcrumbs();
    }, 100)


    if(jQuery('html').hasClass('page-home')){
        var banners = jQuery('.section-banners .item');
        jQuery('.section-banners').attr('data-length', banners.length);
    }

    jQuery('.noticias li').wrapInner('<div class="box-noticia"></div>');
    jQuery('.box-noticia').append('<span class="button-link">Leia mais</span>');

    jQuery('.page-next a').append(theme.icNext);
    jQuery('.page-prev a').prepend(theme.icPrev);
    // slide index
    if(!jQuery('.section-avaliacoes .dep_lista').length){
        jQuery('.section-avaliacoes').remove();
    } else{
        var quant = jQuery('.dep_item').length;
        jQuery('.dep_item').addClass('swiper-slide');
       
        jQuery('.section-avaliacoes .dep_lista').addClass('swiper-wrapper').wrap('<div class="swiper-container"></div>');

        jQuery('.section-avaliacoes .swiper-container').append('<div class="prev arrow-icon"></div><div class="next arrow-icon"></div>');

        var swiper = new Swiper('.section-avaliacoes .swiper-container', {
            slidesPerView: 3,
            // init: false,
            lazy: {
                loadPrevNext: true,
            },
            navigation: {
                nextEl: '.section-avaliacoes .next',
                prevEl: '.section-avaliacoes .prev'
            },
            loop: false,
            breakpoints: {
              850: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2
              },
              420: {
                loop: false,
                slidesPerView: 1,
              }
            }
        });
    }

  
    
    jQuery('.section-avaliacoes .dep_dados').wrap('<a href="/depoimentos-de-clientes"></a>');
    jQuery('.dep_lista li:hidden').remove();

    if(jQuery('html').hasClass('page-depoimentos')){
        theme.organizeStoreReviewsPage();   
        theme.validateStoreReviewForm();     
    }

    jQuery('.page-product .increment-page .low').click(function(){
        var input = jQuery('.page-product').find('#quantidade #quant');
        input.val(parseInt(input.val()) == 1 ? 1 : parseInt(input.val()) - 1);
    });

    jQuery('.page-product .increment-page .add').click(function(){
        var input = jQuery('.page-product').find('#quantidade #quant');
        input.val(parseInt(input.val()) + 1);
    });

    jQuery('.add-cart-modal .increment-page .low').click(function(){
        var input = jQuery('.page-product').find('#quantidade #quant');
        input.val(parseInt(input.val()) == 1 ? 1 : parseInt(input.val()) - 1);
    });

    jQuery('.add-cart-modal .increment-page .add').click(function(){
        var input = jQuery('.box-add-cart .quant input');
        input.val(parseInt(input.val()) + 1);
    });
    
    // theme.slideCatalog();

    if(jQuery('html').hasClass('page-product')){
        theme.productVisited();
        theme.shipping();
        theme.startZoom();
        theme.productVariant();
    }

    if(jQuery('html').hasClass('page-finalizar_presentes')) theme.present();

    cart.startCart();

    theme.bannerFull();
    theme.bannerInfo();

    if(jQuery('html').hasClass('page-newsletter')) theme.organizeNewsletterPage();
});


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}