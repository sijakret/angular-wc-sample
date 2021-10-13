// custom element
import { LitElement, html, customElement,property } from 'lit-element'

@customElement('my-custom-element')
export class SHUICustomElement extends LitElement {
  @property() name = 'default'
  @property() numprop = -1000
  render() {
    return html`<b style="color: rgba(255,0,0,1)">WEBCOMPONENT: ${this.name} - number ${this.numprop}</b>`
  }
}
