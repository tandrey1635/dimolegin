const wrapper = document.querySelector('.wrapper')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('[data-modal="yes"]')
const notCloseModal = document.querySelector('[data-modal="no"]')

const hideModal = ()=> {
	document.body.classList.add('overflow')

    closeModal.addEventListener('click', (e)=> {
		e.preventDefault()
        wrapper.classList.remove('blur')
        modal.classList.add('modal_noactive')
        document.body.classList.remove('overflow')
    })


    notCloseModal.addEventListener('click', (e)=> {
		e.preventDefault()
        alert('Материалы этого раздела сайта доступны только для медицинских и фармацевтических работников.')
    })
}

hideModal()