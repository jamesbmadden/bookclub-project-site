import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import '../block/block.js';

@customElement('bc-character')
export default class Character extends LitElement {

  @property({type: String}) character = '';

  static get styles () {
    return css`
      :host {
        display: inline-block;
        width: 50%;
      }
      bc-block {
        text-align: left;
        color: white;
        font-size: 1.25rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
      }
      .dash {
        display: inline-block;
        padding-left: 1rem;
        padding-bottom: 1rem;
      }
      p {
        box-sizing: border-box;
        padding: 1rem;
        text-align: justify;
      }
    `;
  }

  render () {
    return html`
      <bc-block width="100">
        <h2>${this.character}</h2>
        <p><slot></slot></p>
      </bc-block>
    `;
  }

}