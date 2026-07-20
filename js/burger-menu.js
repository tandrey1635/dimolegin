const headerLink = document.querySelectorAll('.header__link')
const burgerMenuBtn = document.querySelector('.burger__menu')
const burgerMenu = document.querySelector('.header__nav')
const burgerMenuLine = document.querySelectorAll('.burger__menu__line')

const changeTextLinkOnresize = () => {
	window.addEventListener('resize', () => {
		if (window.innerWidth < 992) {
			headerLink.forEach(link => {
				if (link.textContent == 'Ки') {
					link.textContent = 'Клинические исследования'
				}
			})
		}

		else {
			headerLink.forEach(link => {
				if (link.textContent == 'Клинические исследования') {
					link.textContent = 'Ки'
				}
			})
		}
	})

	if (window.innerWidth < 992) {
		headerLink.forEach(link => {
			if (link.textContent == 'Ки') {
				link.textContent = 'Клинические исследования'
			}
		})
	}
}


const handleBurgerMenuNavigation = () => {
	const wrapper = document.querySelector('.wrapper')
    const burgerMenuBtn = document.querySelector('.burger__menu')
    const burgerMenuLine = document.querySelectorAll('.burger__menu__line')
    const burgerMenu = document.querySelector('.header__nav')

	const changeActiveClass = (selector) => {
		selector.forEach(selector=> {
            selector.classList.toggle('burger__menu__line_active')
        })
	}

    burgerMenuBtn.addEventListener('click', ()=> {
        burgerMenu.classList.toggle('header__nav_active')
		document.body.classList.toggle('overflow')
		changeActiveClass(burgerMenuLine)
    })

	wrapper.addEventListener('click', (e)=> {
		if (e.target.classList.contains('header__link')) {
			burgerMenu.classList.remove('header__nav_active')
			document.body.classList.remove('overflow')
			changeActiveClass(burgerMenuLine)
		}
	})
}

changeTextLinkOnresize()
handleBurgerMenuNavigation()