const moreInfoBtn = document.querySelector('#why-btn-cntnr')
const whyHeader = document.querySelector('#why-hdr')
const whyCloseBtn = document.querySelector('#why-slide-close-btn')
const whySlide = document.querySelector('#why-slide-cntnr')

//Always listening for the more info button to be clicked'
moreInfoBtn.addEventListener('click', () => {
    //starts off at 150% right, this is so it goes to the middle of the page
    whySlide.style.right = '0'
    whySlide.style.transform = 'scale(1)'

    //Returns the slide to relative so it fits within the document again
    //transitionrun is the 1st step in a transition, so this fires immediatley
    //before any delays in a transition
    whySlide.addEventListener('transitionrun', function setRelative() {
        whySlide.style.position = 'relative'

        //Causes issues if not removed, doubles the animation on first click
        whySlide.removeEventListener('transitionrun', setRelative);
    })

    //transitionstart is after it starts, a small delay then this fires
    whySlide.addEventListener('transitionstart', function removeheader() {
        whyHeader.style.transform = 'scale(0)'
        whyHeader.style.position = 'absolute'

        whySlide.removeEventListener('transitionstart', removeheader)
    })


})


//Always listening for the close button to be clicked
whyCloseBtn.addEventListener('click', () => {

    whySlide.style.right = '150%'
    whySlide.style.transform = 'scale(0)'

    //This sets the slide in element to absolute when its finished
    whySlide.addEventListener('transitionend', function setAbsolute() {
        //Once the transition ends, it sets the element to absolute, and rescales it to 1
        whySlide.style.position = 'absolute'
        whyHeader.style.position = 'relative'
        whyHeader.style.transform = 'scale(1)'

        //Have to remove this event listener or it will set this element to absolute on any transition
        whySlide.removeEventListener('transitionend', setAbsolute)
    })

})