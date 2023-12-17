document.addEventListener("DOMContentLoaded", () => {
  const inp = document.getElementById("size"),
    size_val = document.getElementById("size-value"),
    con = document.querySelector(".controller .title"),
    controller = document.querySelector(".controller"),
    container = document.querySelector("main.full"),
    btn = document.getElementById("hide"),
    draggableElements = [
      document.getElementById("square"),
      document.getElementById("circle"),
      document.getElementById("trigle"),
    ];

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

  draggableElements.forEach((el) => {
    // Set the initial position of the draggable element
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.Event;
      e.preventDefault();
      // Get the mouse cursor position at startup
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // Call a function whenever the cursor moves
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      el.classList.add("drag");

      e = e || window.Event;
      e.preventDefault();
      // Calculate the new cursor position
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // Set the element's new position
      el.style.top = el.offsetTop - pos2 + "px";
      el.style.left = el.offsetLeft - pos1 + "px";

      observe(el);
    }

    function closeDragElement() {
      el.classList.remove("drag");

      // Stop moving when the mouse button is released
      document.onmouseup = null;
      document.onmousemove = null;
    }
  });

  function observe(el) {
    const cordElement = el.getBoundingClientRect(),
      cordContainer = controller.getBoundingClientRect();

    if (
      cordElement.top <= cordContainer.bottom &&
      cordElement.bottom >= cordContainer.top &&
      cordElement.left <= cordContainer.right &&
      cordElement.right >= cordContainer.left
    ) {
      console.log("Elements are intersecting");
      el.classList.add("intersecting");
    } else {
      console.log("Elements are not intersecting");
      el.classList.remove("intersecting");
    }
  }
});
