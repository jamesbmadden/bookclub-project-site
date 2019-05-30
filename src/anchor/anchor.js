import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-anchor')
class Anchor extends LitElement {

  @property({ type: String })
  anchor = '';

  render () {
    return html`
      <a href="#${this.anchor}" ><slot></slot></a>
    `;
  }

}