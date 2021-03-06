import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-block')
export default class Block extends LitElement {

  @property({ type: Number })
  width;

  static get styles () {
    return css`
      :host {
        display: inline-block;
        width: 100%;
      }
      :host(:only-child:not([width])) {
        max-width: 512px;
      }
    `;
  }

  render () {
    return html`
      ${this.width ? html`<style>
        :host {
          width: ${this.width}%;
        }
      </style>` : ''}
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