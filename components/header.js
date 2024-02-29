class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>  
        <div class = "searchList">
            <div class="logo-container">
                <a href="#" class="logo">
                    <h2>Brookeandco</h2>
                </a> 
            </div>
            <button class= "exploreButton">
                    <span>Explorer</span>
                    <svg class="exploreButtonArrow " viewBox="0 0 32 32" width="9" height="9"><path fill="#fff" d="M30.054 14.429l-13.25 13.232q-0.339 0.339-0.804 0.339t-0.804-0.339l-13.25-13.232q-0.339-0.339-0.339-0.813t0.339-0.813l2.964-2.946q0.339-0.339 0.804-0.339t0.804 0.339l9.482 9.482 9.482-9.482q0.339-0.339 0.804-0.339t0.804 0.339l2.964 2.946q0.339 0.339 0.339 0.813t-0.339 0.813z"></path></svg>
            </button>
            <div class="scrollingMenu">

            </div>
        </div>
        <div class="searchBar">
            <form action="" id="searchBarForm" role="search">
                <input type="search" id="query" name="query"
                    placeholder="Rechercher"
                    aria-label ="Rechercher a travers le contenu du site"
                    >
                <button type="submit" class="searchBarButton">
                    go!
                </button>
            </form>
        </div>
      
        <ul class="nav-links">
            <li class="cart"><a href="#"><img src="/images/shopping-cart.png" alt=""></a></li>
            <li class="signIn"><a href="/">Connexion</a></li>
            <li class="register"><a href="/">Inscription</a></li>
        </ul>
    </header>
    `;
    }
}
// register the custom element with customElements.define() method
customElements.define('header-component', Header);