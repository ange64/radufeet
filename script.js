// Edit this list to change / add subtitles. HTML is allowed (e.g. the emoji img).
const subtitles = [
  '"Une pilosité envoutante" -Nico👨🏿',
  '"J\'aimerai les avoir dans la bouche 👄" -Ramor',
  '"Une fierté pour la France 🇫🇷" -Macron',
  '"J\'y pense régulièrement la nuit..." -Tuchages♿',
  '"MAIS C\'EST QUOI CETTE MERDE ?????" -Raduf',
  '"J\'ai payé dix balles pour les ieps de mon collègue" -Ange',
  '🎺Onlyfans disponible !🎺 - Link here ->',
  '"L\'odeur me manque beaucoup" :(" -Lucas',
  '"The greatest. The best. Feet. Mmmm. 😩" -Donald Trump'
];

const el = document.querySelector('.sub-text');
let i = 0;

setInterval(() => {
  el.classList.add('is-leaving');          // fade + slide the current one out
  setTimeout(() => {
    i = (i + 1) % subtitles.length;
    el.innerHTML = subtitles[i];
    el.classList.remove('is-leaving');     // fade + slide the new one in
  }, 500);                                  // must match the CSS transition duration
}, 5000);                                   // total time each subtitle is shown
