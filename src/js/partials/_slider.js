import '../lib/slick.min';

const SLIDER_EXTRA = $('.js-slider-extra');
const SLIDER_ADVANAGES = $('.js-slider-advantages');
const SLIDER_PRODUCT = $('.js-slider-product');
const SLIDER_THUMBS = $('.js-slider-thumbs');

function initSlider(slider, options) {
	slider.not('.slick-initialized').slick(options);
}

initSlider(SLIDER_EXTRA, {
	slidesToShow: 4,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 4000,
	dots: true
});

initSlider(SLIDER_ADVANAGES, {
	slidesToShow: 4,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 4000,
	dots: true
});

initSlider(SLIDER_PRODUCT, {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: SLIDER_THUMBS
});

initSlider(SLIDER_THUMBS, {
	slidesToShow: 5,
	vertical: true,
	asNavFor: SLIDER_PRODUCT
});