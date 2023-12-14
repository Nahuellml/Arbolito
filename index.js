const treeContainer = document.querySelector('.tree-container');
const balls = document.querySelectorAll('.ball');
const card = document.querySelector('.card');

function getRandomDelay() {
  return Math.random() * 50;
}

balls.forEach(ball => {   
  ball.style.animationDelay = `${getRandomDelay()}s`;
});

function handleBallClick(e) {
  if(e.target.matches('.ball')) {
    console.log(e.target);
    card.style.opacity = '1';
    card.style.transform = 'scale(1) rotate(720deg)';
  }
}

card.addEventListener('click', () => {
  card.style.opacity = '0';
  card.style.transform = 'scale(0)';
});

treeContainer.addEventListener('click', handleBallClick);

