const articlesTransform4 = document.querySelector(".articles-transform-4");
const contentWrapper4 = articlesTransform4.querySelector(".content-wrapper");
const p2Element4 = contentWrapper4.querySelector(".p2");
const p3Element4 = contentWrapper4.querySelector(".p3");

articlesTransform4.addEventListener("mouseover", () => {
  articlesTransform4.classList.add("show-p3");
});

articlesTransform4.addEventListener("mouseout", () => {
  articlesTransform4.classList.remove("show-p3");
});