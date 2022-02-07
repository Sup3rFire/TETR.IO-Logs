browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.indexOf("?ext") == -1) {
      return {
        redirectUrl: browser.runtime.getURL("inject.js"),
      };
    }
  },
  {
    urls: ["*://tetr.io/js/tetrio.js*"],
  },
  ["blocking"]
);
