let s = document.createElement("script");
s.src = browser.runtime.getURL("filters.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
