let btns = Array.from(document.querySelectorAll('.btn'))
let pargrs = Array.from(document.querySelectorAll('.item')) 



btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btns.forEach((e)=>{
            e.classList.remove('active')
            pargrs[btns.indexOf(e)].classList.remove('active')
        })
        btn.classList.add('active')
        pargrs[btns.indexOf(btn)].classList.add('active')
    }
        
    )
})