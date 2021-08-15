class HeroContainer extends HTMLElement {
    
    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;
        this.buttonCaption = this.getAttribute("button-caption") || null;
        this.render();
    }

    render(){
        this.innerHTML = `<div class="hero-container">
        <h2 tabindex = "7">${this.title}</h2>
        <h3 tabindex = "8">${this.description}</h3>
        <button aria-label="Download Button " tabindex = "9">${this.buttonCaption}</button>
        </div>`
    }
   }
    
    
   customElements.define("hero-container", HeroContainer);