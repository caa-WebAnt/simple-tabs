var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
class SimpleTabs {
  constructor(options) {
    __publicField(this, "options", {
      open: 0
    });
    this.options = Object.assign({}, this.options, options);
    this.links = document.querySelectorAll(this.options.links);
    this.init();
  }
  init() {
    const windowHash = window.location.hash;
    if (windowHash != "") {
      this.locationHash(windowHash);
    } else {
      if (this.options.open < this.links.length) {
        this.tabInit(this.options.open);
      } else {
        this.tabInit(0);
        console.error(`Attention the tab number (${this.options.open}) does not exist. Open tab with default value (0) !`);
      }
    }
    this.links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.onClick(event);
      });
    });
    window.addEventListener("hashchange", () => {
      this.locationHash(window.location.hash);
    });
  }
  tabInit(tabNumber) {
    this.links[tabNumber].classList.add("active");
    const href = this.links[tabNumber].getAttribute("href");
    document.querySelector(href).classList.add("active");
  }
  onClick(event) {
    const href = event.target.getAttribute("href");
    window.history.pushState({}, "", href);
    const current = event.currentTarget.parentNode.parentNode.querySelector("a.active");
    const currentHref = current.getAttribute("href");
    current.classList.remove("active");
    document.querySelector(currentHref).classList.remove("active");
    event.currentTarget.classList.add("active");
    document.querySelector(href).classList.add("active");
  }
  tabInitWithHas(el) {
    const hasActive = el.classList.contains("active");
    if (hasActive) {
      return false;
    } else {
      const href = el.getAttribute("href");
      const current = el.parentNode.parentNode.querySelector("a.active");
      if (current != null) {
        const currentHref = current.getAttribute("href");
        current.classList.remove("active");
        document.querySelector(currentHref).classList.remove("active");
      }
      el.classList.add("active");
      document.querySelector(href).classList.add("active");
    }
  }
  locationHash(hash) {
    if (hash != "") {
      this.links.forEach((el) => {
        if (el.getAttribute("href") === hash) {
          this.tabInitWithHas(el);
        }
      });
    } else {
      this.tabInitWithHas(this.links[0]);
    }
  }
}
