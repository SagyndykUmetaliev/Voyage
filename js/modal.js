const modal= document.querySelector('.modal')
const backdrop= document.querySelector('.backdrop')
const modalButton= document.querySelector('.modal__button')

const Contact = ()=>{
    modal.classList.toggle('modalActive')
    backdrop.classList.toggle('backdropActive')
    document.body.classList.toggle('hideScroll')
}
modalButton.addEventListener('click',Contact)
backdrop.addEventListener('click',Contact)
modal.addEventListener('click',(e)=>{
    e.stopPropagation()
})
const modalImg = document.querySelector('.modal__col')

modalImg.addEventListener('click',Contact)
modalImg.addEventListener('click',(e)=>{
    e.stopPropagation()
})

