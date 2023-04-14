let navbar = document.querySelector('.navbar')
let navbar_ul = document.getElementById('navbar_ul')
let hamburger_btn = document.getElementById('hamburger_btn')
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