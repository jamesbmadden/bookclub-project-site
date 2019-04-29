import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-blockquote')
export default class Blockquote extends LitElement {

  @property({type: String}) credit = '';

  static get styles () {
    return css`
      .container {
        position: relative;
        display: inline-block;
        width: 50%;
        color: white;
      }
      .decoration {
        color: #555;
        position: absolute;
        left: 8px;
        font-weight: 900;
        font-size: 8rem;
        z-index: -1;
      }
      blockquote {
        padding-top: 1rem;
      }
    `;
  }

  render () {
    return html`
      <div class="container">
        <span class="decoration">“</span>
        <blockquote>
          <slot></slot>
        </blockquote>
        -<cite>${this.credit}</cite>
      </div>
    `;
  }

}