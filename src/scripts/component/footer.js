/* eslint-disable linebreak-style */
class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Neckooleri Website © 2023</p>
        </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
