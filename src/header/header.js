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
        background: linear-gradient(90deg, #00bcd4, #673ab7);
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
        position: relative;
        display: inline-block;
        height: 100%;
        width: 100%;
        background-image: url('./img/julia.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
    `;
  }

  render () {
    return html`
      <header>
        <div class="julia"></div>
        <h1>I am Not<br>
        Your Perfect<br>
        Mexican Daughter</h1>
      </header>
    `;
  }

}