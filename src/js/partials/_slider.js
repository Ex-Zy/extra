import '../lib/slick.min';

const SLIDER_EXTRA = $('.js-slider-extra');
const SLIDER_ADVANAGES = $('.js-slider-advantages');

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