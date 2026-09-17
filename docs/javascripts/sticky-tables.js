document$.subscribe(function () {
  document.querySelectorAll(".sf-sticky-first table").forEach(function (table) {
    table.classList.add("sf-sticky-table");

    const scroll =
      table.closest(".md-typeset__scrollwrap") ||
      table.closest(".md-typeset__table") ||
      table.parentElement;

    if (scroll) {
      scroll.classList.add("sf-sticky-scroll");
    }
  });
});
