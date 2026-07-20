const wrapper = document.querySelector('.wrapper')
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close')

const showReseachModal = () => {
	body.addEventListener('click', (e)=> {
		if (e.target.classList.contains('research-page-details__btn_apply')) {
			e.preventDefault()
			modal.classList.remove('modal_noactive')
			document.body.classList.add('overflow')
			wrapper.classList.add('blur')
		}

		if (e.target.classList.contains('modal__close')) {
			modal.classList.add('modal_noactive')
			document.body.classList.remove('overflow')
			wrapper.classList.remove('blur')
		}
	})
}

showReseachModal()