const deleteCardElement = () => {
  const cardDelete = elements.querySelectorAll('.element-item__delete');
  cardDelete.forEach((item) => {
    item.addEventListener('click', function () {
      const elementDelete = item.closest('.element-item');
      elementDelete.remove();
    });
  });
};
