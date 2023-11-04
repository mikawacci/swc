import {
  LitElement,
  html,
  TemplateResult,
  css,
} from "lit";
import {
  customElement,
} from 'lit/decorators.js';
import "@spectrum-web-components/card/sp-card.js";
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-star.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-star-outline.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-close';
import '@spectrum-web-components/action-button/sp-action-button.js';

@customElement("my-card")
export default class MyActionGroup extends LitElement {
  static styles = [
    css`
      :host ::slotted([slot='cover-photo']) {
          display: none !important
      }
      sp-card {
        display: flex;
      }
      sp-card:not(:hover, :focus-within) sp-action-menu {
        opacity: 0;
      }

      sp-card:not(:hover, :focus-within) .card-star sp-icon-star-outline {
        opacity: 0;
      }

      sp-card:not(:hover, :focus-within) .card-flag sp-icon-checkmark {
        opacity: 0;
      }

      sp-card:not(:hover, :focus-within) .card-flag sp-icon-close {
        opacity: 0;
      }

      img {
        height: 100%;
        width: 100%;
      }
      .card-action-menu {
        position: absolute;
        top: 1em;
        right: 1em;
      }
      .card-star {
        text-align: center;
        width: 100%;
      }
      .heading-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: absolute;
      }
      .card-flag {
        position: relative;
        display: flex;
        align-items: left;
        left: 0;
        margin-right: 10px;
      }
      .card-star {
        position: relative;
        display: flex;
        align-items: center;
      }

    `,
  ];
  protected render(): TemplateResult {
    return html`
      <div style="width: 200px; height: 200px">
        <sp-card variant="quiet" toggles={true}>
          <img alt="" slot="preview" src="https://picsum.photos/200/300" />
          <sp-action-menu class="card-action-menu" slot="actions" placement="bottom-end" quiet>
              <sp-menu-item>menu 1</sp-menu-item>
              <sp-menu-item>menu 2</sp-menu-item>
              <sp-menu-item>menu 3</sp-menu-item>
              <sp-menu-item>menu 4</sp-menu-item>
              <sp-menu-item>menu 5</sp-menu-item>
              <sp-menu-item>menu 6</sp-menu-item>
              <sp-menu-item>menu 7</sp-menu-item>
              <sp-menu-item>menu 8</sp-menu-item>
              <sp-menu-item>menu 9</sp-menu-item>
              <sp-menu-item>menu 10</sp-menu-item>
          </sp-action-menu>

          <div class="heading-container" slot="actions">
            <div class="card-flag">
              <sp-action-button quiet size="xs">
                <sp-icon-checkmark slot="icon"></sp-icon-checkmark>
              </sp-action-button>
              <sp-action-button quiet size="xs">
                <sp-icon-close slot="icon"></sp-icon-close>
              </sp-action-button>
            </div>
            <div class="card-star">
                <sp-action-button quiet size="xs">
                  <sp-icon-star slot="icon"></sp-icon-star>
                </sp-action-button>
                <sp-action-button quiet size="xs">
                  <sp-icon-star-outline slot="icon"></sp-icon-star-outline>
                </sp-action-button>
                <sp-action-button quiet size="xs">
                  <sp-icon-star-outline slot="icon"></sp-icon-star-outline>
                </sp-action-button>
                <sp-action-button quiet size="xs">
                  <sp-icon-star-outline slot="icon"></sp-icon-star-outline>
                </sp-action-button>
                <sp-action-button quiet size="xs">
                  <sp-icon-star-outline slot="icon"></sp-icon-star-outline>
                </sp-action-button>
            </div>
            <div class="card-action-sub-menu">
              <sp-action-menu slot="actions" placement="bottom-end" quiet>
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
              </sp-action-menu>
            </div>
          </div>
        </sp-card>
      </div>
    `;
  }
}