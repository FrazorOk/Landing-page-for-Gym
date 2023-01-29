const swiper = new Swiper('.programs__slider', {
	navigation: {
		nextEl: '.swiper-button_next',
		prevEl: '.swiper-button_prev',
	},
	initialSlide: 2,
	slidesPerView: 2,
	centeredSlides: true,
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	allowTouchMove: true,
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.swiper-wrapper',
	},

	breakpoints: {
		832: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4.13,
		},
	},
});

const swiper2 = new Swiper('.community__slider', {
	navigation: {
		nextEl: '.community-button_next',
		prevEl: '.community-button_prev',
	},
	slidesPerView: 1.4,
	initialSlide: 1,
	spaceBetween: 15,
	grabCursor: true,
	centeredSlides: true,
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.community__slider',
	},

	breakpoints: {
		600: {
			slidesPerView: 2,
			centeredSlides: true,
			initialSlide: 1,
			grabCursor: true,
		},
		832: {
			slidesPerView: 2,
			centeredSlides: true,
			initialSlide: 1,
			grabCursor: true,
		},
		1100: {
			slidesPerView: 2.4,
			initialSlide: 0,
			centeredSlides: false,
			grabCursor: true,
		},
	},
});
