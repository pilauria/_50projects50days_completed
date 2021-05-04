const insert = document.getElementById('insert');

window.addEventListener('keydown', event => {
  // event.key === ' ' ? event.code : event.key: if we hit space in keyboard is empty string ' '
  insert.innerHTML = `
       <div class="key">
       ${event.key === ' ' ? event.code : event.key}  
       <small>event.key</small>
   </div>
   <div class="key">
       ${event.keyCode}
       <small>event.keyCode</small>
   </div>
   <div class="key">
       ${event.code}
       <small>event.code</small>
   </div>
       `;
});

/* pressing a letter in the keyboard show the keyboard event in the console with a bunch of properties: we can see there the ones we need =>   code:  key:  keyCode:

window.addEventListener('keydown', e => {
  console.log(e);
});

 window is the top level object in the browser */
