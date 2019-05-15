import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-block')
export default class Block extends LitElement {

  @property({ type: Number })
  fraction = 2;

  static get styles () {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }
    `;
  }

  render () {
    return html`
      <style>
        :host {
          width: calc(100% / ${this.fraction});
        }
      </style>
      <slot></slot>
    `;
  }

}

@customElement('bc-block-container')
export class BlockContainer extends LitElement {

  static get styles () {
    return css`
      .container {
        display: flex;
        position: relative;
        width: 100%;
        flex-direction: row;
      }
    `;
  }

  render () {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }

}