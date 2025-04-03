import { navigate } from "astro:transitions/client";
import { getJsonFromElement, stopEvent } from "../utils/clientUtils";

const NEXT_PAGE_CODES = ["ArrowRight", "ArrowDown", "Space"];
const PREV_PAGE_CODES = ["ArrowLeft", "ArrowUp", "Backspace"];
const DIGITS = Array.from({ length: 10 }, (_, i) => i.toString());

customElements.define(
    "keyboard-navigation",
    class extends HTMLElement {
        private slidePaths: string[] = [];
        private digitInput = "";
        private timeout: ReturnType<typeof setTimeout> | undefined = undefined;

        private getCurrentPage() {
            return this.slidePaths.indexOf(document.location.pathname);
        }

        connectedCallback() {
            this.slidePaths = getJsonFromElement<string[]>(this, "script", []);
            window.addEventListener("keydown", this.onKeyDown);
        }

        disconnectedCallback() {
            window.removeEventListener("keydown", this.onKeyDown);
        }

        private performDigitJump = () => {
            clearTimeout(this.timeout);
            if (this.digitInput.length) {
                const page = parseInt(this.digitInput, 10);
                if (!isNaN(page)) this.setPage(page);
            }
            this.digitInput = "";
        };

        private setPage(page: number) {
            if (page >= this.slidePaths.length) page = this.slidePaths.length - 1;
            else if (page < 0) page = 0;
            if (page !== this.getCurrentPage()) navigate(this.slidePaths[page]);
        }

        private handleKeyDown(e: KeyboardEvent): boolean {
            if (NEXT_PAGE_CODES.includes(e.code)) this.setPage(this.getCurrentPage() + 1);
            else if (PREV_PAGE_CODES.includes(e.code)) this.setPage(this.getCurrentPage() - 1);
            else if (e.code === "Home") this.setPage(0);
            else if (e.code === "End") this.setPage(this.slidePaths.length - 1);
            else if (e.code === "KeyP") navigate("/print");
            else if (e.code === "Enter") {
                if (document.fullscreenElement) document.exitFullscreen();
                else document.documentElement.requestFullscreen();
            } else if (DIGITS.includes(e.key)) {
                this.digitInput += e.key;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(this.performDigitJump, 500);
            } else {
                return false;
            }

            return true;
        }

        private onKeyDown = (e: KeyboardEvent) => {
            if (this.handleKeyDown(e)) {
                stopEvent(e);
            }
        };
    },
);
