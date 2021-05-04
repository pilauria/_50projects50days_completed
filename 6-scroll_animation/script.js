const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  //where in the window we want to trigger the box movement(little less than the window height)
  const triggerBottom = (window.innerHeight / 5) * 4; // **

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; // +++

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

// **  console.log(window.innerHeight) ==> the height of the actual window at that moment
// +++  https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
