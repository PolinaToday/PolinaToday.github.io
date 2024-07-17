// Получаем кнопку "Купить" и модальное окно
var buyButton = document.getElementById('buyButton');
var modal = document.getElementById('modal');

// Получаем элемент закрытия модального окна
var closeBtn = document.getElementsByClassName('close')[0];

// Открываем модальное окно при клике на кнопку "Купить"
buyButton.onclick = function() {
  modal.style.display = 'block';
}

// Закрываем модальное окно при клике на кнопку закрытия
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне модального окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
