window.addEventListener('DOMContentLoaded', function() {

let hb_menu = document.getElementById('closed_menu');
let menu_options = document.getElementById('nav-menu-options');
let close_menu = document.getElementById('closing-x')

    hb_menu.addEventListener('click',function() {
        if (hb_menu.style.display = 'block' && (menu_options.style.display = 'none')) {
            hb_menu.style.display = 'none';
            menu_options.style.display = 'block';
        }
    })

    close_menu.addEventListener('click', function() {
            menu_options.style.display = 'none'
            hb_menu.style.display = 'block'
        })
})
