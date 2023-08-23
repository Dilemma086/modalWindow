const body = document.querySelector('body')
const imgGroupArr = Array.from(document.querySelectorAll('.imgGroup img'))
const creatDiv = document.createElement('div')
const callBackDiv = document.createElement('div')


imgGroupArr.forEach((item, i) => item.addEventListener('click', () => {
    body.append(creatDiv)
    creatDiv.classList.add('modalDiv')
    creatDiv.innerHTML = `
        <span class='close'><img src='/img/close.png'></span>
        <span class='prev'></span>
        <img src='${item.src}' alt='${i}'>
        <span class='next'></span>
    `
    const next = document.querySelector('.next')
    next.addEventListener('click', () => {
        creatDiv.children[2].remove()
        const modalDiv = document.querySelector('.modalDiv')
        modalDiv.innerHTML = `
            <img src='${imgGroupArr[i+1].src}' alt='${i+1}'>
        ` 
    })
    const close = document.querySelector('.close')
    close.addEventListener('click', () => {
        creatDiv.remove()
    })
}))

//вызов CallBack
const callBackForm = document.querySelector('.callBackForm')
callBackForm.addEventListener('click', () => {
    body.append(callBackDiv)
    
    callBackDiv.classList.add('modalDivCallBack')
    callBackDiv.innerHTML = `
        <span class='close'><img src='/img/close.png'></span>
        <h1> Написать: WhatsApp Телеграм</h1>
       
    `
    const close = document.querySelector('.close')
    close.addEventListener('click', () => {
        callBackDiv.remove()
    })
})
