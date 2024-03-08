export type Properties = {
  size?: string;
  color?: string;
  "background-color"?: string;
};

const attributes: (keyof Properties)[] = ["size", "color", "background-color"];

const DEFAULT_SIZE = "145px";
const DEFAULT_COLOR = "white";
const DEFAULT_BG_COLOR = "#F7931A";

/**
 * @attribute {string} size Size to determine width and height of the logo
 * @attribute {string} bgColor Background color of the logo
 * @attribute {string} color Color of the capital `₿`
 */
class BitcoinLogo extends HTMLElement {
  #shadowRoot: ShadowRoot = this.attachShadow({ mode: "open" });
  #sheet = new CSSStyleSheet()

  constructor() {
    super();
    this.#shadowRoot.adoptedStyleSheets = [this.#sheet]
  }
  static get observedAttributes(): string[] {
    return [...attributes];
  }

  #updateSize() {
    var size = this.getAttribute("size") || DEFAULT_SIZE;
    this.#sheet.replaceSync(`:host {
      height: ${size};
      width: ${size};
    }`);
  } 
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // dirty check
    if (oldValue === newValue) return;

    // path of `₿`
    const b = this.#shadowRoot.getElementById("₿");
    // path of background
    const bg = this.#shadowRoot.getElementById("₿₿");

    switch (name) {
      case "size": {
        
        this.#updateSize();
        break;
      }
      case "background-color": {
        bg?.setAttribute("fill", newValue || DEFAULT_BG_COLOR);
        break;
      }
      case "color": {
        b?.setAttribute("fill", newValue || DEFAULT_COLOR);
        break;
      }
    }
  }

  connectedCallback() {
    const logo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    logo.setAttribute("id", "logo");
    logo.setAttribute("width", "100%");
    logo.setAttribute("height", "100%");
    logo.setAttribute("viewBox", "0 0 145 145");
    logo.innerHTML = `<path id="₿₿" d="M141.846 89.665C132.225 128.236 93.1561 151.711 54.5761 142.093C16.0121 132.476 -7.46593 93.408 2.15707 54.839C11.7711 16.264 50.8431 -7.21401 89.4101 2.40299C127.985 12.02 151.462 51.091 141.846 89.665Z" fill=${
      this.getAttribute("background-color") || DEFAULT_BG_COLOR
    } />
    <path id="₿" d="M103.736 61.991C105.169 52.409 97.873 47.26 87.898 43.824L91.133 30.846L83.234 28.877L80.083 41.513C78.004 40.995 75.873 40.507 73.752 40.024L76.923 27.304L69.029 25.335L65.79 38.311C64.071 37.919 62.384 37.533 60.745 37.125L60.753 37.085L49.859 34.365L47.757 42.802C47.757 42.802 53.618 44.145 53.494 44.229C56.694 45.028 57.271 47.145 57.175 48.823L53.49 63.608C53.71 63.665 53.995 63.744 54.311 63.872C54.047 63.806 53.766 63.735 53.477 63.665L48.311 84.375C47.919 85.347 46.926 86.806 44.69 86.252C44.769 86.366 38.945 84.819 38.945 84.819L35.025 93.86L45.305 96.423C47.216 96.902 49.093 97.402 50.937 97.876L47.67 111.003L55.561 112.972L58.798 99.985C60.956 100.569 63.048 101.11 65.096 101.619L61.87 114.545L69.77 116.514L73.04 103.412C86.513 105.96 96.644 104.932 100.906 92.749C104.343 82.939 100.736 77.28 93.648 73.589C98.809 72.399 102.699 69.003 103.736 61.991ZM85.687 87.302C83.243 97.113 66.727 91.809 61.369 90.478L65.707 73.089C71.062 74.424 88.237 77.07 85.687 87.302ZM88.127 61.85C85.901 70.774 72.152 66.239 67.692 65.127L71.624 49.355C76.083 50.467 90.448 52.542 88.127 61.85Z" fill=${
      this.getAttribute("color") || DEFAULT_COLOR
    } />`;

    this.#updateSize();

    this.#shadowRoot.appendChild(logo);
  }
}

customElements.define("bitcoin-logo", BitcoinLogo);

export default BitcoinLogo;

declare global {
  interface HTMLElementTagNameMap {
    "bitcoin-logo": typeof BitcoinLogo;
  }
}
