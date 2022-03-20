class NavHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="nav">
            <div class="nav-header">
                <div class="nav-line">
                <hr />
            </div>
            <div class="nav-menu"></div>
        </div>`;
  }
}
customElements.define('nav-header', NavHeader);
