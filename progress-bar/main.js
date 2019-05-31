const progressBar = document.querySelector(".progress-bar");

const setBarWidth = function(increment) {
  const width = progressBar.style.width;

  if (width === "") {
    progressBar.style.width = `${increment}%`;
  } else {
    progressBar.style.width = `${parseFloat(progressBar.style.width) +
      increment}%`;
  }
};

const main = function(seconds) {
  const increment = 100 / seconds;

  const interval = setInterval(() => {
    setBarWidth(increment);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 1000 * seconds);
};

main(10);
