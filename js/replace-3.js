const articlesTransform3 = document.querySelector(".articles-transform-3");
const contentWrapper3 = articlesTransform3.querySelector(".content-wrapper");
const p2Element3 = contentWrapper3.querySelector(".p2");
const p3Element3 = contentWrapper3.querySelector(".p3");

articlesTransform3.addEventListener("mouseover", () => {
  articlesTransform3.classList.add("show-p3");
});

articlesTransform3.addEventListener("mouseout", () => {
  articlesTransform3.classList.remove("show-p3");
});