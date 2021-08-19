//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// Build function
const togglePlay = () => {
  // this function helps in pauseing and playing  the game
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }

  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

const updateButton = () => {
  // this function helps in updating the button
  const icon = this.paused ? 'A' : 'B';
  console.log(icon);
  toggle.textContent = icon;
};

// Hoooks up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
