function resetOtherElements(clickedElement) {
  const allQuestions = document.querySelectorAll('.question');

  allQuestions.forEach((element) => {
    if (element !== clickedElement) {
      const icon = element.querySelector('i');
      const question = element.querySelector('p');

      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-plus');

      element.style.backgroundColor = "#ffffff";
      question.style.color = '#000000';
    }
  });
}

function clickQuestion(event) {
  const clickedElement = event.currentTarget;
  const icon = clickedElement.querySelector('i');
  const question = clickedElement.querySelector('p');
  const div = clickedElement.querySelector('.question');
  
  if (icon.classList.contains('fa-plus')) {
    resetOtherElements(clickedElement);

    icon.classList.remove('fa-plus');
    icon.classList.add('fa-xmark');

    div.style.backgroundColor = "#36348e";
    question.style.color = '#ffffff';
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-plus');

    div.style.backgroundColor = "#ffffff";
    question.style.color = '#000000';
  }
}