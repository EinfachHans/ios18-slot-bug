/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../headline/headline'
import '../toggle/toggle'

@customElement('my-app')
export class MyApp extends LitElement {
  override render() {
    return html`
      <my-headline>Headline</my-headline>
      
      <my-toggle>Some content</my-toggle>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
