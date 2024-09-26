import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-headline')
export class MyHeadline extends LitElement {
  static override styles = css`
    .headline {
        font-size: 30px;
        font-weight: bold;
    }
  `

  override render() {
    return html`<div class="headline">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-headline': MyHeadline;
  }
}
