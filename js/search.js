const searchBlockFieldIcon = document.querySelector('.research-page__promo__block__search__field__icon')
const searchField = document.querySelector('.research-page__promo__search__field')
const searchFieldResult = document.querySelector('.research-page__promo__block__search__field__result')
const searchFieldResultMenu = document.querySelector('.research-page__promo__block__search__field__result__menu')


const changeIcons = () => {
	searchField.addEventListener('input', () => {
		if (searchField.value !== '') {
			searchBlockFieldIcon.classList.add('research-page__promo__block__search__field__icon_active')
			searchFieldResult.classList.add('research-page__promo__block__search__field__result_active')
		}

		else {
			searchFieldResult.classList.remove('research-page__promo__block__search__field__result_active')
			searchBlockFieldIcon.classList.remove('research-page__promo__block__search__field__icon_active')
		}
	})
}

const selectSeachResult = () => {
	searchFieldResultMenu.addEventListener('click', (e) => {
		if (e.target.classList.contains('research-page__promo__block__search__field__result__list')) {
			searchField.value = e.target.textContent
		}
	})
}

const clearSearchField = () => {
	searchBlockFieldIcon.addEventListener('click', () => {
		if (searchField.value !== '' && searchBlockFieldIcon.classList.contains('research-page__promo__block__search__field__icon_active')) {
			searchField.value = ''
			searchBlockFieldIcon.classList.remove('research-page__promo__block__search__field__icon_active')
			searchFieldResult.classList.remove('research-page__promo__block__search__field__result_active')
		}
	})
}

changeIcons()
clearSearchField()
selectSeachResult()