

export const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const firstLink = document.getElementById('1');
        firstLink.addEventListener("focus" , () =>{
            const mediaQuery = window.matchMedia('(max-width: 768px)')
            if (mediaQuery.matches) {
                if(burger.dataset.open == "false"){
                    animateBurger(nav, navLinks, burger);
                }
     
              }
        })
    burger.addEventListener("click", () => {
        animateBurger(nav, navLinks, burger);
    });
}

const animateBurger = (navElement, navLinksElement, burgerElement) =>{
    navElement.classList.toggle   ("nav-active");
    navLinksElement.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
 
    burgerElement.classList.toggle("toggle");
  
    if(burgerElement.dataset.open == "false"){
        burgerElement.setAttribute('data-open', 'true');
    }else{
        burgerElement.setAttribute('data-open', 'false');
    }
    console.log(burgerElement.dataset.open);
}

