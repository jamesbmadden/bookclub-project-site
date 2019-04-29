import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-blockquote')
export default class Blockquote extends LitElement {

  @property({type: String}) credit = '';

  static get styles () {
    return css`

    `;
  }

  render () {
    return html`
      <span class="decoration">“</span>
      <div class="container">
        <blockquote>
          <slot></slot>
        </blockquote>
        <cite>${this.credit}</cite>
      </div>
    `;
  }

}