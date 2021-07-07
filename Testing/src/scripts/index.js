import "../styles/main.scss";
import './component/navbar/navbar-list';
import './component/hero/HeroContainer.js';
import links from './component/navbar/navbar-links';
import { navSlide } from "./animation/navbar_animation";


const renderNavbar = (links) =>{
    const navbarContainer = document.getElementById("nav-container");
    const navbarListElement = document.createElement("navbar-list");
    navbarListElement.navbarLinks = links;
    console.log(navbarListElement);
    navbarContainer.appendChild(navbarListElement); 
}

renderNavbar(links);
navSlide();

