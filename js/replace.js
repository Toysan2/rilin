const articlesTransform = document.querySelector(".articles-transform");
const contentWrapper = articlesTransform.querySelector(".content-wrapper");
const p2Element = contentWrapper.querySelector(".p2");
const p3Element = contentWrapper.querySelector(".p3");

articlesTransform.addEventListener("mouseover", () => {
  articlesTransform.classList.add("show-p3");
});

articlesTransform.addEventListener("mouseout", () => {
  articlesTransform.classList.remove("show-p3");
});
