/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero" id="hero">
        <picture class="hero__img">
        <source type="image/webp" media="(max-width: 480px)" srcset="./images/hero-image_1-small.webp">
        <source type="image/webp" media="(max-width: 800px)" srcset="./images/hero-image_1-large.webp">
        <source type="image/webp" srcset="./hero-image_1.webp">
        <source type="image/jpeg" media="(max-width: 480px)" srcset="./images/hero-image_1-small.jpg">
        <source type="image/jpeg" media="(max-width: 800px)" srcset="./images/hero-image_1-large.jpg">
            <img src="./hero-image_1.jpg" alt="restaurant hero image">
        </picture>
        <div class="hero__content">
            <h1 class="hero__title">CHOOSE YOUR EXPERIENCE</h1>
            <p class="hero__description">Pilih dan Temukan Pengalaman Mu Di sini</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-element', Hero);
