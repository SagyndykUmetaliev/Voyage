const burgerFunc = () =>{
    const burger = document.querySelector('.mobile-btn')
    const nav = document.querySelector('.header__list')
    const fourth = document.querySelectorAll('.header__list-item')

    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-mobile-btn')
        nav.classList.toggle('show-header__list')
    })

    for(let item of fourth ){
        item.addEventListener('click',()=>{
            nav.classList.remove('show-header__list')
        burger.classList.toggle('show-mobile-btn')

        })
        
    }
} 
burgerFunc()