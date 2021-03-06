import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import '../block/block.js';

@customElement('bc-event')
export default class Event extends LitElement {

  @property({type: String}) title = '';

  static get styles () {
    return css`
      :host {
        display: inline-block;
        width: 100%;
      }
      bc-block {
        text-align: left;
        color: white;
        font-size: 1.25rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: 900;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;
      }
      h2::after {
        content: "";
        position: relative;
        display: block;
        width: 32px;
        height: 4px;
        background-color: white;
        margin-top: 0.5rem;
      }
      .dash {
        display: inline-block;
        padding-left: 1rem;
        padding-bottom: 1rem;
      }
      p {
        margin-top: 0;
        box-sizing: border-box;
        padding: 1rem;
        padding-top: 0;
        text-align: justify;
      }
      :host(:only-child) {
        max-width: 512px;
      }
      :host(:only-child) h2 {
        text-align: center;
      }
      :host(:only-child) h2::after {
        margin: auto;
        margin-top: 0.5rem;
      }
    `;
  }

  render () {
    return html`
      <bc-block width="100">
        <h2>${this.title}</h2>
        <p><slot></slot></p>
      </bc-block>
    `;
  }

}