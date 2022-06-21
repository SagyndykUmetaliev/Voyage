let form = document.querySelector('#form')

let bot={
    TOKEN:'5334414138:AAEcU0vk33Tc-bHIXRHoO5lM2j2D65E8iAY',
    chatID:'-416112541'
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    let message = document.querySelector('#inputMessage')
    let number = document.querySelector('#inputNumber')
    if(message.value.length>1 && number.value.length>8){
        const sendTelegram =`
        Имя:${message.value} и Телефон : ${number.value}
        `



        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,{method: 'GET'})
        .then(response=>{
            alert('MESSAGE SUCCESS')
        },error => {
            alert('MESSAGE ERROR')
        })
        message.value=''
        number.value=''
    }else{
        alert('nedostatochno simvolov v pole imya ili nomer')
    }
})




// слайдер//////////
$(document).ready(function(){
    $('.mySlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: 200,
        autoplaySpeed: 3000,
        dots: true,
        arrow:true,
        pauseOnhover:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                dots:false,
                arrow:false,
                
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                arrow:false,
              }
            },
          ]
    });
  });


const api = [{
    img: './images/person_1.jpg',
    text: 'Far far away, behind the word mountains, the countries'
    

    
},
{

    img: './images/person_3.jpg',
    text:'Far far away, behind the word mountains, the countries'
},
{

    img: './images/person_2.jpg',
    text:'Far far away, behind the word mountains,  the countries'
},
{

    img: './images/person_4.jpg',
    text:'Far far away, behind the word mountains,  the countries'
},
{
    img: './images/person_1.jpg',
    text:'Far far away, behind the word mountains,  the countries'
},
{

    img: './images/person_2.jpg',
    text:'Far far away, behind the word mountains, the countries'
},

]

const mySlider =document.querySelector('.mySlider')

api.map(el=>{
    const box =document.createElement('div')
    const text = document.createElement('p')
    const name = document.createElement('name')
    text.textContent=`${el.text} ${el.name} ${el.from}`
    const image = document.createElement('img')
    image.src=el.img
    
    // const nameAgeBox= document.createElement('div')
    
    
    // box.addEventListener('click',()=>{
    //     // const text = document.createElement('p')
    //     (`text:${el.text}  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' \n name:${el.name} Dennis Lee \n from:${el.from} Italy`)
    // })
    
    
    
    
    
    mySlider.append(box)
    box.append(image,text)
    // box.append(image,nameAgeBox)
    })
    // слайдер