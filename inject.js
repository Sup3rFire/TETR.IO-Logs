if (!window.hasOwnProperty("fetched")) {
  window.fetched = true;
  fetch("https://tetr.io/js/tetrio.js?ext")
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      filters.forEach((filter) => {
        text = filter(text);
      });
      eval(text);
    });
}
