function ballBounce(e) {
  if (e.className.indexOf(" bounce") > -1) {
    return;
  }
  toggleBounce(e);
}

function toggleBounce(element) {
  element.classList.add("bounce");
  setTimeout(() => {
    element.classList.remove("bounce");
    element.classList.add("bounce1");
    setTimeout(() => {
      element.classList.remove("bounce1");
      element.classList.add("bounce2");
      setTimeout(() => {
        element.classList.remove("bounce2");
        element.classList.add("bounce3");
        setTimeout(() => {
          element.classList.remove("bounce3");
        }, 300);
      }, 300);
    }, 300);
  }, 300);
}

// Обработчики событий на элементы с классом "b-ball_bounce"
const balls = document.querySelectorAll('.b-ball_bounce');

balls.forEach(ball => {
  ball.addEventListener('mouseenter', function () {
    ballBounce(this);
  });
});
