import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-header')
export default class Header extends LitElement {

  static get styles () {
    return css`
      header {
        position: absolute;
        height: 512px;
        width: 100%;
        top: 0;
        left: 0;
        background: #008ca4;
        text-align: center;
      }
      header::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, #222);
      }
      header h1 {
        font-weight: 900;
        position: absolute;
        left: 8px;
        bottom: 0;
        z-index: 2;
        font-size: 5rem;
        text-align: left;
        color: white;
      }
      .julia {
        display: inline-block;
        height: 100%;
      }
    `;
  }

  render () {
    return html`
      <header>
        <img src="./img/julia.png" class="julia" />
        <h1>I am Not<br>
        Your Perfect<br>
        Mexican Daughter</h1>
      </header>
    `;
  }

}