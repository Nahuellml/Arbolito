const treeContainer = document.querySelector('.tree-container');
const balls = document.querySelectorAll('.ball');
const card = document.querySelector('.card');
const cardTitle = document.getElementById('card-title');
const cardText = document.getElementById('card-text');
const container = document.querySelector('.snow-container');

//Animacion nieve
for (let i = 0; i < 100; i++) {
  let leftSnow = Math.floor(Math.random() * container.clientWidth);
  let topSnow = Math.floor(Math.random() * container.clientHeight);
  let widthSnow = Math.floor(Math.random() * 50);
  let timeSnow = Math.floor((Math.random() * 5) + 5);
  let blurSnow = Math.floor(Math.random() * 10);

  let div = document.createElement('div');
  div.classList.add('snow');
  div.style.left = leftSnow + 'px';
  div.style.top = topSnow + 'px';
  div.style.width = widthSnow + 'px';
  div.style.height = widthSnow + 'px';
  div.style.animationDuration = timeSnow + 's';
  div.style.filter = 'blur(' + blurSnow + 'px)';
  container.appendChild(div);
}

// Array de contenidos para la tarjeta
const cardContents = [
  { title: 'Brillante Celebración', text: 'Que esta temporada esté llena de momentos brillantes y celebración.' },
  { title: 'Luces de Esperanza', text: 'Que las luces navideñas iluminen tu camino con esperanza y alegría.' },
  { title: 'Felicidad Festiva', text: 'Que la alegría festiva te llene de risas y momentos especiales.' },
  { title: 'Paz Interior', text: 'Que encuentres paz en tu corazón y en el mundo que te rodea.' },
  { title: 'Dulces Sueños', text: 'Que esta Navidad te traiga sueños dulces y felices.' },
  { title: 'Magia en el Aire', text: 'Que la magia de la Navidad esté en el aire y te envuelva con su encanto.' },
  { title: 'Tiempo de Amor', text: 'Que el amor de la temporada llene tu hogar y tu corazón.' },
  { title: 'Esperanza Renovada', text: 'Que la Navidad traiga consigo una renovación de esperanza y optimismo.' },
  { title: 'Alegría Inagotable', text: 'Que la alegría de la Navidad sea inagotable en tu vida.' },
  { title: 'Momentos Especiales', text: 'Que esta época te brinde momentos especiales con tus seres queridos.' },
  { title: 'Risas y Amistad', text: 'Que la Navidad esté llena de risas y amistad sincera.' },
  { title: 'Sueños Cumplidos', text: 'Que tus sueños más anhelados se hagan realidad en esta temporada.' },
  { title: 'Aventuras Navideñas', text: 'Que vivas emocionantes aventuras llenas de espíritu navideño.' },
  { title: 'Compasión y Bondad', text: 'Que la compasión y la bondad guíen tus acciones en esta Navidad.' },
  { title: 'Armonía Familiar', text: 'Que la armonía y el amor llenen tu hogar en esta época especial.' },
  { title: 'Regalos del Corazón', text: 'Que los mejores regalos sean aquellos que provienen del corazón.' },
  { title: 'Emoción Festiva', text: 'Que la emoción festiva te envuelva con su espíritu contagioso.' },
  { title: 'Renacimiento de Alegría', text: 'Que la Navidad sea un renacimiento de alegría en tu vida.' },
  { title: 'Unión Familiar', text: 'Que la unión familiar sea el regalo más preciado en esta temporada.' },
  { title: 'Tradición y Calidez', text: 'Que las tradiciones llenen tu hogar con calidez y nostalgia.' },
  { title: 'Melodías Navideñas', text: 'Que las melodías navideñas llenen tu corazón de alegría y paz.' },
  { title: 'Estrellas Guía', text: 'Que las estrellas guíen tus pasos hacia un año nuevo lleno de esperanza.' },
  { title: 'Deseos Cumplidos', text: 'Que todos tus deseos se cumplan en esta Navidad y el próximo año.' },
  { title: 'Reflejo de Gratitud', text: 'Que esta temporada sea un reflejo de gratitud por las bendiciones recibidas.' },
  { title: 'Nuevos Comienzos', text: 'Que la Navidad marque el comienzo de nuevos y emocionantes capítulos en tu vida.' },
];


function getRandomDelay() {
  return Math.random() * 50;
}

function getRandomCardContent() {
  const randomIndex = Math.floor(Math.random() * cardContents.length);
  return cardContents[randomIndex];
}

balls.forEach(ball => {   
  ball.style.animationDelay = `${getRandomDelay()}s`;
});

function handleBallClick(e) {
  if(e.target.matches('.ball')) {

    const randomContent = getRandomCardContent();

    cardTitle.textContent = randomContent.title;
    cardText.textContent = randomContent.text;

    card.style.opacity = '1';
    card.style.transform = 'scale(1) rotate(720deg)';
  }
}

card.addEventListener('click', () => {
  card.style.opacity = '0';
  card.style.transform = 'scale(0)';
});

treeContainer.addEventListener('click', handleBallClick);



