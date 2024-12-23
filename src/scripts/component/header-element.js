/* eslint-disable linebreak-style */
class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar">
                <a class="navbar-brand" href="#/beranda">
                    <img src="./logo.jpeg" alt="Icon">
                    Neckooleri Guide
                </a>
                <ul class="navbar-nav">
                    <button id="menu" class="header__menu">☰</button>
                    <li class="nav-item">
                        <a class="nav-link" href="#/beranda">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/favorite">Favorite</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/azzam-al-husaini-1ba19b209"
                            target="_blank">About
                            Us</a>
                    </li>
                </ul>
            </nav>
            <nav id="drawer" class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#/beranda">BERANDA</a></li>
                    <li class="nav__item"><a href="#/favorite">FAVORITE</a></li>
                    <li class="nav__item"><a href="https://www.linkedin.com/in/azzam-al-husaini-1ba19b209"
                            target="_blank">ABOUT
                            US</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('header-element', HeaderElement);
