function makeActive(id) {
  if (id) location.hash = "#" + id;
  const hash = location.hash;
  if (hash) {
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector(".active").classList.remove("active");
    document
      .querySelector(`[data-id="${hash.slice(1)}"]`)
      .classList.add("active-btn");
    document.querySelector(hash).classList.add("active");
  }
}

[...document.querySelectorAll(".control")].forEach((button) => {
  button.addEventListener("click", function () {
    makeActive(button.dataset.id);
  });
});
document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.onreadystatechange = makeActive();
