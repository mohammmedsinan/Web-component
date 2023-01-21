const template = document.createElement('template');
template.innerHTML = `
<style>
label{
    color:red;
    font-size:50px;
}
input {
    padding: 70px;
    width: 60px;
    height: 30px;
}
</style>
<input type="checkbox" label=""/> 
<label>
<slot></slot>
</label>
`;

class customElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('custom-element', customElement);
