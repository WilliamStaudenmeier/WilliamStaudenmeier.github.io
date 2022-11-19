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
    text: '— Git...',
    delay: 1.6
  },
  {
    text: '...Hub',
    delay: 2.4
  }
], 2);
