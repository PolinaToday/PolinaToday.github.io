document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку "Купить" и модальное окно
    var buyButton = document.getElementById("buyButton");
    var modal = document.getElementById("myModal");

    // Получаем элемент для закрытия модального окна
    var closeButton = document.getElementsByClassName("close")[0];

    // Открываем модальное окно при клике на кнопку "Купить"
    buyButton.onclick = function() {
        modal.style.display = "block";
    }

    // Закрываем модальное окно при клике на кнопку закрытия
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
