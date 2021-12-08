// search elements
// let btn = document.getElementsByTagName('button')
// let btn = document.getElementsByClassName('btn')
// let btn = document.getElementById('btn')
// let btn = document.getElementById('btn')
// let btn = document.querySelector('.btn')
// let btn = document.querySelector('#btn')
// let btns = document.querySelectorAll('button')

// events

// box.onclick = () => { 
//     console.log('click');
// }
// box.onmouseenter = () => {
//     console.log('enter');
// }
// box.onmouseleave = () => {
//     console.log('leave');
// }
// box.onmousemove = () => {
//     console.log('move');
// }
// box.onscroll = () => {
//     console.log('scroll');
// }
// box.ondblclick = () => {
//     console.log('double click');
// }


// function
// let btn = document.querySelector('button')
// let span = document.querySelector('span')
// let box = document.querySelector('.box')
// let body = document.querySelector('body')
// let input = document.querySelector('input')

// box.onclick = () => {
    // class

    // if (box.classList.contains('active')) {
    //     box.classList.remove('active')
    // } else {
    //     box.classList.add('active')
    // }
    // box.classList.remove('box')
    // box.classList.toggle('active')

    // text
    // h1.innerText = "<span>Hello RWLC</span>"
    // span.innerHTML = `
    //     <ul>
    //         <li>hello</li>
    //         <li>world</li>
    //     </ul>
    // `
    // attributes

    // let att = input.getAttribute('id')
    // let att = input.setAttribute('type', 'range')

    // style 

    // box.style.backgroundColor = 'green'
    // box.style.borderRadius = '100%'
// }


let boxes = document.querySelectorAll('.box')

boxes.forEach(elem => {
    elem.onmouseenter = () => {
        elem.classList.add('active')
    }
})
