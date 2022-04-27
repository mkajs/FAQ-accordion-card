const accordianItems = document.getElementsByClassName("accordian__item");
const box = document.getElementsByClassName("illustration-box")[0];

const closeAccordians = function () {
  for (let item of accordianItems)
    item.classList.remove("accordian__item--active");
};

for (let item of accordianItems)
  item.addEventListener("click", (e) => {
    closeAccordians();

    e.target
      .closest(".accordian__item")
      ?.classList.add("accordian__item--active");
  });
for (let item of accordianItems)
  item.addEventListener("mousemove", (e) => {
    if (e.target.closest(".item-header"))
      box.classList.add("illustration-box--hover");
  });
for (let item of accordianItems)
  item.addEventListener("mouseout", (e) => {
    if (e.target.closest(".item-header"))
      box.classList.remove("illustration-box--hover");
  });
