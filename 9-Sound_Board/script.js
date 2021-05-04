const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play(); // NOTE
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

//  NOTE with html5 we have an JS API for audio elements and one of the methods is .play
