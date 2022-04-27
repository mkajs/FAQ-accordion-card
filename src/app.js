const accordianItems = document.getElementsByClassName("accordian__item");

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
