import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';
import '../block/block.js';

@customElement('bc-blockquote')
export default class Blockquote extends LitElement {

  @property({type: String}) credit = '';

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
        <span class="decoration">“</span>
        <blockquote>
          <slot></slot>
        </blockquote>
        <span class="dash">-</span><cite>${this.credit}</cite>
      </bc-block>
    `;
  }

}