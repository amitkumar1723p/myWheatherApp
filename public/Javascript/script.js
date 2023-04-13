

//  grap the dom Element 
let slideimagecontainer = document.querySelector('.right_section')
let imagecontainer = document.getElementsByClassName('figure')
let priviousimage_btn = document.getElementById('previous_btn')
let nextimge_btn = document.getElementById('next_btn')




// AddEvnetListener 

//  SlideImageContainer Mousehover  addEventlistner 
slideimagecontainer.addEventListener('mouseover', function () {
    priviousimage_btn.style.display = 'block'
    nextimge_btn.style.display = 'block'
})

//  SlideImageContaienr  Mouseout  addEventListener 
slideimagecontainer.addEventListener('mouseout', function () {

    priviousimage_btn.style.display = 'none'
    nextimge_btn.style.display = 'none'
})



let index = 0
let num = 0

//  image manully controll btn addEventListener


//    SHOW   PRIVIOUS IMAGE   
priviousimage_btn.addEventListener('click', function () {
    console.log('previous button ')
    index--
    if (index < 0) {
        index = imagecontainer.length - 1

        showimagefunc(index)

    }

    else {

        showimagefunc(index)


    }

})
nextimge_btn.addEventListener('click', function () {
    index++

    if (index > imagecontainer.length - 1) {
        index = 0

        showimagefunc(index)
    }
    else {

        showimagefunc(index)
    }

})







// image show function 

const showimagefunc = (imgenum) => {


    for (let allimagecontainer of imagecontainer) {

        allimagecontainer.style.display = 'none'

    }

    imagecontainer[imgenum].style.display = 'block'
}

auto()

function auto() {

    index++

    if (index > imagecontainer.length - 1) {
        index = 0

        showimagefunc(index)
    } else {

        showimagefunc(index)
    }

    // showimagefunc(index) // clalling show 
    setTimeout(auto, 3000) // next slide will apperar after 5s
}




// responsive Navigation 
let navbar = document.querySelector('.navbar')
let navbar_ul = document.getElementById('navbar_ul')
console.log(navbar_ul)
let hamburger_btn = document.getElementById('hamburger_btn')
console.log(hamburger_btn)
let nav = true
hamburger_btn.addEventListener('click', function () {
    if (nav == true) {
        nav = false
        navbar.style.height = '200px';


        // navbar_ul.style.visibility = 'visible'
        navbar_ul.style.display = 'flex';




    }
    else {
        nav = true
        navbar.style.height = '50px'
        // navbar_ul.style.visibility = 'hidden'
        navbar_ul.style.display = 'none'




    }
})