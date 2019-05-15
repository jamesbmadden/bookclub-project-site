import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('bc-block')
export default class Block extends LitElement {
  @property({ type: Number })
  width = 50;
}