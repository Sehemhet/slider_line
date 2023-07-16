

var pagInd1 = 0; //wrap_card
function clickPag(n, container) {
      if (container === 'container1') {
        pagination1(n);
    }
}

function pagination1(n) {
  const sliderLine = document.querySelector('.container1 .slider-line');
  const wrapCard = document.querySelectorAll('.container1 .slider__img');
  const wrapCardWidth = wrapCard[0].offsetWidth;
  const slideCount = wrapCard.length;

  pagInd1 += n;

  if (pagInd1 < 0) {
    pagInd1 = 0; // Остановить в обратную сторону
  } else if (pagInd1 > slideCount - 1) {
    pagInd1 = slideCount - 1; // Остановить на последней карточке
  }

  const offset = wrapCardWidth * pagInd1;
  sliderLine.style.transform = `translateX(${-offset}px)`;
  updateCardStyles();

}