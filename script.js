let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.4 + Math.random() * 0.1 + "s";
    hrElement.style.animationDelay = Math.random() * 6 + "s";
  }
  document.body.appendChild(hrElement);
}
