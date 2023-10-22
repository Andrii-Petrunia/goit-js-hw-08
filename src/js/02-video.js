import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Vimeo('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

vimeoPlayer.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
}

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

  if (currentTime) {
    vimeoPlayer.setCurrentTime(parseFloat(currentTime));
  }

  vimeoPlayer.on('play', () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  });
});

