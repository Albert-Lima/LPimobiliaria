const menuNavigationUl = document.querySelector("#menuNavigationUl")
const bttMenu = document.querySelector(".menuButton")
const barMenu = document.querySelectorAll(".barMenu")

function openMenu(){
    barMenu[0].style.width = "30px"
    barMenu[0].style.rotate = '-45deg'
    barMenu[0].style.position = "absolute"
    barMenu[0].style.transform = "translateX(0px)"

    barMenu[1].style.display = "none"

    barMenu[2].style.width = "30px"
    barMenu[2].style.rotate = "45deg"
    barMenu[2].style.position = "absolute"

    bttMenu.style.alignItems = "center"
    bttMenu.style.position = "absolute"
    bttMenu.style.right = "10px"
    bttMenu.style.top = "10px"

    menuNavigationUl.style.display = "flex"

    bttMenu.removeEventListener("click", openMenu)
    bttMenu.addEventListener("click", closeMenu)
    function closeMenu(){
        barMenu[0].removeAttribute("style")
        barMenu[1].removeAttribute("style")
        barMenu[2].removeAttribute("style")

        bttMenu.removeAttribute("style")

        menuNavigationUl.removeAttribute("style")

        bttMenu.removeEventListener("click", closeMenu)
        bttMenu.addEventListener("click", openMenu)
    }
}
bttMenu.addEventListener("click", openMenu)


/*scroll functions*/
const buttonAboutUs = document.querySelector("#bttAboutUs")
const aboutUs = document.querySelector(".aboutUs")


buttonAboutUs.addEventListener("click", ()=>{
    let elementoRect = aboutUs.getBoundingClientRect(); // Pega as dimensões do elemento
    let elementoCentro = elementoRect.top + window.scrollY - (window.innerHeight / 2) + (elementoRect.height / 2);

    window.scrollTo({
        top: elementoCentro,
        behavior: "smooth"
    });
})

const buttonContato = document.querySelector("#bttContato")
const contatoForm = document.querySelector(".form")

buttonContato.addEventListener("click", ()=>{
    let elementoRect = contatoForm.getBoundingClientRect()
    let elementoCentro = elementoRect.top + (window.scrollY - 50) 

    window.scrollTo({
        top: elementoCentro,
        behavior: "smooth"
    })
})