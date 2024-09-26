import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('my-toggle')
export class MyToggle extends LitElement {
  static override styles = css`
    .container {
        margin-top: 20px;
        padding: 4px;
        border: 1px solid red;
    }
  `

  @state()
  private isOpen = false

  override render() {
    return html`${this.renderButton()} ${this.isOpen ? this.renderConditionally() : ''}`;
  }

  private renderButton(): TemplateResult {
      return html`
        <button @click="${() => this.isOpen = !this.isOpen}">Toggle</button>
      `
  }

  private renderConditionally(): TemplateResult {
    return html`<div class="container">
      <slot></slot>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-toggle': MyToggle;
  }
}
