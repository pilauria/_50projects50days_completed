//use JS to wrap each letter in a span, we have a transition on that span to move it up(transform= translateY() with a transition).

const labels = document.querySelectorAll('.form-control label');

/*loop into the text of the labels, we split the text(we get an array from .split().Then we're mapping it to create an array of the letter with a span around it.Then we're turning it back into a string with .join().) */
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});

/* not that we have the <span> we can stile them on CSS */
