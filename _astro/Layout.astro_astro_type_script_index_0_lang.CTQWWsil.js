import{n as s}from"./router.w0bOrQtx.js";function r(e,t,n){const i=e.querySelector(t);if(!i?.textContent)return console.error(`Could not find element with selector ${t}`),n;try{return JSON.parse(i.textContent)}catch(o){return console.error(`Could not parse content of selector ${t} as JSON`,o),n}}const d=e=>{e.preventDefault(),e.stopPropagation()},c=["ArrowRight","ArrowDown","Space"],l=["ArrowLeft","ArrowUp","Backspace"],a=Array.from({length:10},(e,t)=>t.toString());customElements.define("keyboard-navigation",class extends HTMLElement{slidePaths=[];digitInput="";timeout=void 0;getCurrentPage(){return this.slidePaths.indexOf(document.location.pathname)}connectedCallback(){this.slidePaths=r(this,"script",[]),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeyDown)}performDigitJump=()=>{if(clearTimeout(this.timeout),this.digitInput.length){const e=parseInt(this.digitInput,10);isNaN(e)||this.setPage(e)}this.digitInput=""};setPage(e){e>=this.slidePaths.length?e=this.slidePaths.length-1:e<0&&(e=0),e!==this.getCurrentPage()&&s(this.slidePaths[e])}handleKeyDown(e){if(c.includes(e.code))this.setPage(this.getCurrentPage()+1);else if(l.includes(e.code))this.setPage(this.getCurrentPage()-1);else if(e.code==="Home")this.setPage(0);else if(e.code==="End")this.setPage(this.slidePaths.length-1);else if(e.code==="KeyP")s("/print");else if(e.code==="Enter")document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();else if(a.includes(e.key))this.digitInput+=e.key,clearTimeout(this.timeout),this.timeout=setTimeout(this.performDigitJump,500);else return!1;return!0}onKeyDown=e=>{this.handleKeyDown(e)&&d(e)}});customElements.define("slide-screen",class extends HTMLElement{connectedCallback(){this.onResize(),window.addEventListener("resize",this.onResize),document.addEventListener("astro:after-swap",this.onResize)}disconnectedCallback(){window.removeEventListener("resize",this.onResize),document.removeEventListener("astro:after-swap",this.onResize)}onResize=()=>{const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=this.querySelector("div");if(n){const i=Math.min(e/n.clientWidth,t/n.clientHeight);n.style.scale=i.toString()}}});
