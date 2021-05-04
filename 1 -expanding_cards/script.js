/*expanding effect: change the class active for the panel to expand the foto we click on*/

/*Select all the panels and put them in a Nodelist (similar to an array)*/
const panels = document.querySelectorAll('.panel');

// console.log(panels); // ==> Nodelist(5)

// we can now target specific (i.e. panels[0]) or loop through the panels elements;

//add an event listener for each panel so if we click on one of them something happens:
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    //remove the active class on the active panel:
    removeActiveClasses();
    //make the clicked panel active (add a class of 'active'):
    panel.classList.add('active');
  });
});

// funtion to remove the active class
function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'));
}
