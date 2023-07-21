const articlesTransform2 = document.querySelector(".articles-transform-2");
const contentWrapper2 = articlesTransform2.querySelector(".content-wrapper");
const p2Element2 = contentWrapper2.querySelector(".p2");
const p3Element2 = contentWrapper2.querySelector(".p3");

articlesTransform2.addEventListener("mouseover", () => {
  articlesTransform2.classList.add("show-p3");
});

articlesTransform2.addEventListener("mouseout", () => {
  articlesTransform2.classList.remove("show-p3");
});