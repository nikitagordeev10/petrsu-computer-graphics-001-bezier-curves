function main() {
  // получить ссылку на элемент <canvas>
  var canvas = document.getElementById('example');

  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
  }

  // получить двухмерный контекст отображения
  var ctx = canvas.getContext('2d');

  // нарисовать синий квадрат
  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // выбрать синий цвет
  ctx.fillRect(120, 10, 150, 150);  // заполнить заливку квадрата
}
