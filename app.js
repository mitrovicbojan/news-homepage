const primNav = document.querySelector("#prim-nav");
const toggle = document.querySelector(".mobile-toggle");

toggle.addEventListener("click", () => {
  console.log("hi");
  const visible = primNav.getAttribute("data-visible");
  if (visible === "false") {
    primNav.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
  } else if (visible === "true") {
    primNav.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }
});
