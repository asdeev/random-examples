const main = function(seconds) {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.transition = `${seconds}s ease width`;
  progressBar.style.width = "100%";
};

main(10);
