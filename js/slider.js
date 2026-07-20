const swiper = new Swiper(".preparat__swiper", {
	spaceBetween: 30,
	slidesPerView: 1,
	autoHeight: true,

	pagination: {
		el: ".swiper-pagination",
		type: "custom",
	},

	on: {
		slideChange: function () {
			updatePagination(this.activeIndex)
		},
	},
})

function updatePagination(activeIndex) {
	const paginationItems = document.querySelectorAll(
		".preparat__paginations__text"
	)

	paginationItems.forEach((item, index) => {
		if (index === activeIndex) {
			item.classList.add("preparat__paginations__text_active")
		} else {
			item.classList.remove("preparat__paginations__text_active")
		}
	})
}

const paginationItems = document.querySelectorAll(
	".preparat__paginations__text"
)

paginationItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		swiper.slideTo(index)
	})
})

const newsDetailsSwiper = new Swiper(".news-details__swiper", {
	spaceBetween: 30,
	loop: false,
	slidesPerView: 1.35,

	breakpoints: {
		320: {
			slidesPerView: 1.15,
			spaceBetween: 10,
		},

		380: {
			slidesPerView: 1.15,
			spaceBetween: 30,
		},

		992: {
			slidesPerView: 1,
		},

		1050: {
			slidesPerView: 1.05,
		},

		1100: {
			slidesPerView: 1.10,
		},

		1150: {
			slidesPerView: 1.15,
		},

		1200: {
			slidesPerView: 1.20,
		},

		1250: {
			slidesPerView: 1.25,
		},

		1300: {
			slidesPerView: 1.30,
		},

		1350: {
			slidesPerView: 1.35,
		},
	},
})