import '../lib/slick.min';

const SLIDER_EXTRA = $('.js-slider-extra');
const SLIDER_ADVANAGES = $('.js-slider-advantages');
const SLIDER_PRODUCT = $('.js-slider-product');
const SLIDER_DESCRIPTION = $('.js-slider-descr');
const SLIDER_THUMBS = $('.js-slider-thumbs');
const THUMBS = SLIDER_THUMBS.find('.product-thumbs__item');

function initSlider(slider, options) {
	slider.not('.slick-initialized').slick(options);
}

initSlider(SLIDER_EXTRA, {
	slidesToShow: 4,
	// autoplay: true,
	speed: 800,
	autoplaySpeed: 4000,
	dots: true
});

initSlider(SLIDER_ADVANAGES, {
	slidesToShow: 4,
	// autoplay: true,
	speed: 800,
	autoplaySpeed: 4000,
	dots: true
});

initSlider(SLIDER_PRODUCT, {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: SLIDER_THUMBS,
	infinite: false
});

initSlider(SLIDER_THUMBS, {
	slidesToShow: 5,
	vertical: true,
	asNavFor: SLIDER_PRODUCT,
	infinite: false
});

initSlider(SLIDER_DESCRIPTION, {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	infinite: false
});

THUMBS.click(function(e) {
	let index = $(this).data('slick-index');
	SLIDER_PRODUCT.slick('slickGoTo', index, true);
});

SLIDER_PRODUCT.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	SLIDER_DESCRIPTION.slick('slickGoTo', nextSlide, true);
});

