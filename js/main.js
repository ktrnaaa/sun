const sun1 = document.getElementById('sun1');
let isSecondImage = false;

sun1.addEventListener('click', () => {
  if (!isSecondImage) {
    sun1.style.backgroundImage = "url('img/sun2.svg')"; /* Другий SVG */
    isSecondImage = true;
  } else {
    sun1.style.backgroundImage = "url('img/sun1.svg')"; /* Перший SVG */
    isSecondImage = false;
  }
});
