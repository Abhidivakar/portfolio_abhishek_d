//Navigation script
const open = document.getElementById('open')
const close = document.getElementById('close')
const home  = document.getElementById('home')
const about = document.getElementById('about')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')

const container = document.querySelector('.container')
const content = document.querySelector('.content')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')


open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))


home.addEventListener('click', () =>{

 container.classList.remove('show-nav');
 content.classList.remove('show-nav');
 content2.classList.remove('show-nav');
})


about.addEventListener('click', () =>{
 content.classList.add('show-nav');
 container.classList.remove('show-nav');
 content2.classList.remove('hide-page')
})

projects.addEventListener('click', () =>{
    content.classList.add('show-nav');
    content3.classList.remove('hide-page')
    content2.classList.add('hide-page');
    container.classList.remove('show-nav');

})

contact.addEventListener('click', () => {
    content.classList.add('show-nav');
    content2.classList.add('hide-page');
    content3.classList.add('hide-page');
    container.classList.remove('show-nav');
})


//Slider container script for Project Page
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll(':scope > div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


//Pencil sketch expanding cards
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


//Animation page Background slider
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 3000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length-1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// rightBtn.addEventListener('click', () => {
//     idx++
//     changeImage()
//     resetInterval()
// })

// leftBtn.addEventListener('click', () => {
//     idx--
//     changeImage()
//     resetInterval()
// })






//increment counter social

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 5

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})