class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-section fs1">
                <h3> Les meilleures entreprises choisissent Brookeandco Business pour fomer leurs collaborateurs</h2>
            </div>
            <div class="footer-section fs2">
                <div class="links">
                    <ul>
                        <li>
                            <a href="" class="link" target="_blank" >Udemy Business</a>
                        </li>
                        <li>
                            <a class="link" href="">Enseigner sur Udemy</a>
                        </li>
                        <li>
                            <a class="link" href="" target="_blank">Téléchargez l'application</a>
                        </li>
                        <li>
                            <a class="link" href="">À propos d'Udemy</a>
                        </li>
                        <li>
                            <a class="link" href="">Contactez-nous</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a class="link" href="">Carrières</a>
                        </li>
                        <li>
                            <a class="link" href="">Blog</a>
                        </li>
                        <li>
                            <a class="link" href="">Aide et support</a>
                        </li>
                        <li>
                            <a class="link" href="">Affilié</a>
                        </li>
                        <li>
                            <a class="link" href="">Investisseurs</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a class="link" href="">Conditions</a>
                        </li>
                        <li>
                            <a class="link" href="">Politique de confidentialité</a>
                        </li>
                        <li>
                            <a class="link" href="">Paramètres des cookies</a>
                        </li>
                        <li>
                            <a class="link" href="">Plan du site</a>
                        </li>
                        <li>
                            <a class="link" href="">Déclaration d'accessibilité</a>
                        </li>
                    </ul>
                </div>
                <div class="logo-copyright">
                    <div class="logo-container">
                        <a href="/" class="logo">
                            <h3>Brookeandco</h3>
                        </a>
                    </div>
                    <div class="copyright-container">© 2024 Brookeandco, Inc.</div>
                </div>
            </div>
        </footer>
        `
    }
}
customElements.define('footer-component', Footer);