body {
  margin: 0;
  background-color: #1e1e2f;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.garland {
  display: flex;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 100%;
}

.bulb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: glow 1s infinite alternate;
}

/* Разные цвета лампочек */
.bulb:nth-child(1) { background-color: yellow; }
.bulb:nth-child(2) { background-color: red; }
.bulb:nth-child(3) { background-color: green; }
.bulb:nth-child(4) { background-color: blue; }
.bulb:nth-child(5) { background-color: violet; }

/* Анимация мерцания */
@keyframes glow {
  0% {
    opacity: 0.5;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Задержки анимации */
.bulb:nth-child(odd) {
  animation-delay: 0.2s;
}
.bulb:nth-child(even) {
  animation-delay: 0.5s;
}
