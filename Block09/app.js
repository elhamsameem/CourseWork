// this script will highlight the current navbar selection
document.querySelectorAll('.NavLink').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

console.log("This is a hidden message for those who wants to inspect for js file (; \n Hello World!")