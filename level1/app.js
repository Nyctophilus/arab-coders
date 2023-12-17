document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square"),
    circle = document.getElementById("circle"),
    trigle = document.getElementById("trigle"),
    inp = document.getElementById("size"),
    size_val = document.getElementById("size-value"),
    con = document.querySelector(".controller .title"),
    container = document.querySelector("main.full"),
    btn = document.getElementById("hide");

  inp.addEventListener("change", (e) => {
    size_val.innerText = e.target.value;

    document.documentElement.style.setProperty(
      "--shape-size",
      `${e.target.value}rem`
    );
  });

  con.addEventListener("click", () => {
    con.classList.add("hidden");
    container.classList.remove("full");
  });

  btn.addEventListener("click", () => {
    con.classList.remove("hidden");
    container.classList.add("full");
  });
});
