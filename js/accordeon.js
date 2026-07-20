const showAccordeon = () => {
    const accordeonWrapper = document.querySelector('.accordeon__wrapper')

    accordeonWrapper.addEventListener('click', (e)=>{
        if(e.target.classList.contains('accordeon__header')){
            e.target.classList.toggle('accordeon-active-icon')
            e.target.parentElement.nextElementSibling.classList.toggle('accordeon-active')
        }
    })
}

showAccordeon()