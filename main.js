let modalbtn = document.querySelector('.modal-btn')
let modalbg = document.querySelector('.modal-bg')
let modalclose = document.querySelector('.modal-close')

modalbtn.addEventListener('click',function(){
    modalbg.classList.add('bg-active')
})
modalclose.addEventListener('click',function(){
    modalbg.classList.remove('bg-active')
})