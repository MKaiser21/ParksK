function menu() {
  const x = document.getElementById("menuList");
  const y = document.getElementById("menuNav");
  // const z = document.getElementById("logo");
  let z = document.getElementById("logo");
  // const h = document.getElementById("hamBars");
  let h = document.getElementById("hamBars");
  let e = document.getElementById("email");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "4rem";
    // z.style.display = "block";
    // h.style.display = "block";
    e.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.height = "14rem";
    z.style.display = "none";
    h.style.display = "none";
    e.style.display = "none";
  }
}

function closeMenu() {
  const x = document.getElementById("menuList");
  const y = document.getElementById("menuNav");
  const z = document.getElementById("logo");
  const h = document.getElementById("hamBars");
  let e = document.getElementById("email");

  x.style.display = "none";
  y.style.height = "4rem";
  z.style.display = "block";
  h.style.display = "block";
  e.style.display = "block";
}

/*Email buttons*/
window.addEventListener("load", function () {
  document.getElementById("email").onclick = function () {
    queueMail();
  };
});

function queueMail() {
  window.location.href =
    "mailto:parkskugle@gmail.com?subject=Your Fantastic Website";
}
