customElements.define(
    "slide-screen",
    class extends HTMLElement {
        connectedCallback() {
            this.onResize();
            window.addEventListener("resize", this.onResize);
            document.addEventListener("astro:after-swap", this.onResize);
        }

        disconnectedCallback() {
            window.removeEventListener("resize", this.onResize);
            document.removeEventListener("astro:after-swap", this.onResize);
        }

        onResize = () => {
            const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            const child = this.querySelector("div");
            if (child) {
                const scale = Math.min(vw / child.clientWidth, vh / child.clientHeight);
                child.style.scale = scale.toString();
            }
        };
    },
);
