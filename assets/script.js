const d = document,
  $item = d.querySelectorAll(".acc-item");

d.addEventListener("click", (e) => {
  if (e.target.matches(".acc-title *")) {
    e.target.closest(".acc-title").classList.toggle("active");
    e.target.closest(".acc-item").classList.toggle("active");
  } else {
    $item.forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".acc-title").classList.remove("active");
    });
  }
});
