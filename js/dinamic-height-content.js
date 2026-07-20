/* Для фикса висящего подвала на мобилке из-за малого кол-ва контента */

const initialDinamicHeight = () => {
	const header = document.querySelector('.header')
	const main = document.querySelector('main')
	const footer = document.querySelector('.footer')

	const applyDynamicHeight = () => {
		const headerHeight = header.offsetHeight
        const footerHeight = footer.offsetHeight
        const viewportHeight = window.innerHeight

		main.style.minHeight = `${viewportHeight - headerHeight - footerHeight}px`
	}


	window.addEventListener('load', applyDynamicHeight)
	window.addEventListener('resize', applyDynamicHeight)
}


initialDinamicHeight()