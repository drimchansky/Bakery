const cards = document.getElementById('cards');

const cardSwitcher = e => {
  if (
    !e.target.classList.contains('dining-card_top') &&
    e.target.classList.contains('dining-card')
  ) {
    let currentTopCard = cards.querySelector('.dining-card_top');
    const clickedCard = e.target;

    currentTopCard.classList.remove('dining-card_top');
    clickedCard.classList.add('dining-card_top');
    console.log(currentTopCard.dataset.card);
    currentTopCard.dataset.card = clickedCard.dataset.card;
    clickedCard.dataset.card = 'one';
    console.log(currentTopCard.dataset.card);
  }
};

addEventListener('click', cardSwitcher);
