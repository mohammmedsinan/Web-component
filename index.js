class customElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Hello World !';
  }
}

customElements.define('custom-element', customElement);
