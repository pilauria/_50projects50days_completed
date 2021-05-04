// bring in toggle buttons (querySelectorAll)
// loop through nodelist (forEach)
// Add click event (addEventListener)
// toggle the active class on the parent node (. parentNode & classList.toggle())

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function () {
    toggle.parentNode.classList.toggle('active');
  });
});
