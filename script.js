function toggleText(element, texts, delay) {
  let i = 0;
  
  const work = () => {
    element.innerHTML = texts[i].text;

    setTimeout(work, (texts[i].delay * 1000))

    i = (i < texts.length - 1) ? i + 1 : 0;
  }

  setTimeout(work, (delay * 1000))
}

toggleText(document.querySelector(".js-dialog"), [
  {
    text: 'Welcome to...',
    delay: 1.6
  },
  {
    text: '...my portfolio.',
    delay: 2.4
  }
], 2);

let hrElement;
let counter = 40;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 5 + Math.random() * 0.1 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";
  }
  document.body.appendChild(hrElement);
}
