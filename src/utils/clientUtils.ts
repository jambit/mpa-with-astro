export function getJsonFromElement<T>(root: HTMLElement, selector: string, fallback: T): T {
    const element = root.querySelector(selector);
    if (!element?.textContent) {
        console.error(`Could not find element with selector ${selector}`);

        return fallback;
    }
    try {
        return JSON.parse(element.textContent);
    } catch (e) {
        console.error(`Could not parse content of selector ${selector} as JSON`, e);
        return fallback;
    }
}

export const stopEvent = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
};
