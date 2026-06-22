// Edit this list to change / add subtitles. HTML is allowed (e.g. the emoji img).
const subtitles = [
  '"Une pilosité envoutante" - Nico',
  '"J\'aimerai les avoir dans la bouche" -Ramor',
  '"J\'y pense régulièrement la nuit..." -Tuchages"',
  '"Les meilleurs dix balles de ma vie" -Ange',
  '"Onlyfans bientot disponible !"',
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
