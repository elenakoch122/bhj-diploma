// Класс Modal отвечает за управление всплывающими окнами. В первую очередь это открытие или закрытие имеющихся окон

class Modal {
  // Устанавливает текущий элемент в свойство element. Регистрирует обработчики событий с помощью Modal.registerEvents()
  // Если переданный элемент не существует, необходимо выкинуть ошибку.
  constructor(element){
    if (element === undefined) {
      throw new Error('Переданный элемент не существует');
    }
    this.element = element;
    this.registerEvents();
  }

  // При нажатии на элемент с data-dismiss="modal" должен закрыть текущее окно (с помощью метода Modal.onClose)
  registerEvents() {
    Array.from(this.element.querySelectorAll('[data-dismiss="modal"]')).forEach((closeElem) => {
      closeElem.addEventListener('click', (e) => {
        e.preventDefault();
        try {
          this.onClose(this.element);
        } catch (error) {
          throw new Error(error);
        }
      });
    });
  }

  // Срабатывает после нажатия на элементы, закрывающие окно. Закрывает текущее окно (Modal.close())
  onClose() {
    this.close();
  }

  // Открывает окно: устанавливает CSS-свойство display со значением «block»
  open() {
    this.element.style.display = 'block';
  }

  // Закрывает окно: удаляет CSS-свойство display
  close() {
    this.element.querySelector('form').reset();
    this.element.style.display = 'none';
  }
}
