import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import '../block/block.js';

@customElement('bc-character')
export default class Character extends LitElement {

  @property({type: String}) character = '';

  static get styles () {
    return css`
      :host {
        display: inline-block;
      }
      bc-block {
        text-align: left;
        color: white;
        font-size: 1.25rem;
      }
      h2 {
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: 900;
      }
      .dash {
        display: inline-block;
        padding-left: 1rem;
        padding-bottom: 1rem;
      }
    `;
  }

  render () {
    return html`
      <bc-block width="50">
        <h2>${this.character}</h2>
        <p><slot></slot></p>
      </bc-block>
    `;
  }

}