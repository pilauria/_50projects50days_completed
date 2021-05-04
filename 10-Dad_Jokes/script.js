// select what we need from the DOM:
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//request with async/await
async function generateJoke() {
  const config = {
    headers: { Accept: 'application/json' },
  };
  //fetch is async so we have to await untill is done fetching
  const response = await fetch('https://icanhazdadjoke.com', config);

  const data = await response.json();

  jokeEl.innerHTML = data.joke;
}

//  Request with fetch (using .then())
// function generateJoke() {
//   const config = {
//     headers: { Accept: 'application/json' },
//   };

//   fetch('https://icanhazdadjoke.com', config) // NOTE
//     .then(response => response.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke; // take the joke from the object and insert in our page
//     });
// }

// NOTE we are using fetch here. Same result with postman, curl. We can also use a library called AXIOS.

// go to the network tab to see all the info about the requests made
