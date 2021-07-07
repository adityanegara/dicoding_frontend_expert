import "./navbar-item.js"

class NavbarList extends HTMLElement {
    set navbarLinks(navbarLinks){
        console.log('set');
        this._navbarLinks = navbarLinks;
        this.render();
    }

  

    

    render(){
        this._navbarLinks.forEach(navbarLink =>{
            const navbarItemElement = document.createElement("navbar-item");
            navbarItemElement.navbarLink = navbarLink;
            this.appendChild(navbarItemElement);
        })
        const new_html = 
        `
        <div class = "logo">
            <h1 tabindex = "0">ROKU</h1>
        </div> 

        <button class = "burger" data-open = "false" aria-label = "To Navigation"></button>
            <ul class = 'nav-links'>
                ${this.innerHTML}
            </ul>
    
       
        `;
        
        this.innerHTML = new_html;
    }
}

customElements.define("navbar-list", NavbarList)