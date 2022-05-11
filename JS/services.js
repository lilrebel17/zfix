moreInfoBtnCntnr = document.getElementById('why-btn-cntnr')
moreInfoCloseButton = document.getElementById('why-slide-close-btn')
SlideShowContainer = document.querySelector('#why-slide-cntnr')
slideImageElement = document.querySelector('.why-slide-img')
slideImageDescription = document.querySelector('.why-slide-desc')
whyHeader = document.querySelector('#why-hdr')


SlideShowArray = [
    '.\Resources\computer-repair.jpg'
]

moreInfoBtnCntnr.addEventListener('click', (e) => {
    if(e.target == moreInfoBtnCntnr || document.getElementById('why-btn')) {
        SlideShowContainer.classList.remove('invisible')
        SlideShowContainer.classList.add('visible')

        moreInfoBtnCntnr.classList.add('invisible')
        moreInfoBtnCntnr.classList.remove('visible')

        whyHeader.classList.add('invisible')
        whyHeader.classList.remove('visible')

        SlideShowContainer.style.right = '0%';
        whyHeader.style.left = '150%'
        moreInfoBtnCntnr.style.left = '150%'
    }
})

moreInfoCloseButton.addEventListener('click', () =>{
   SlideShowContainer.classList.remove('visible')
   SlideShowContainer.classList.add('invisible')

   moreInfoBtnCntnr.classList.add('visible')
   moreInfoBtnCntnr.classList.remove('invisible')

   whyHeader.classList.add('visible')
   whyHeader.classList.remove('invisible')

   SlideShowContainer.style.right = "102%"
   whyHeader.style.left = '0%'
   moreInfoBtnCntnr.style.left = '0%'
})

whyHeader.addEventListener('transitionstart', () => {
    if(whyHeader.style.left == '0%') {
        whyHeader.style.height = 'initial'
    }
    if(whyHeader.style.left == '150%') {
        whyHeader.style.height = '0px'
    }
})

moreInfoBtnCntnr.addEventListener('transitionstart', () => {
    if(moreInfoBtnCntnr.style.left == '150%') {
        moreInfoBtnCntnr.style.height= '0px'
    }
    if(moreInfoBtnCntnr.style.left == '0%') {
        moreInfoBtnCntnr.style.height = 'initial'
    }
})
