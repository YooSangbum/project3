const contents = document.querySelector('#contents');
const justify = document.querySelector('.fa-align-justify');
const left = document.querySelector('.fa-align-left');
const center = document.querySelector('.fa-align-center');
const right = document.querySelector('.fa-align-right');
const small = document.querySelector('.editing span:nth-of-type(1)');
const medium = document.querySelector('.editing span:nth-of-type(2)');
const large = document.querySelector('.editing span:nth-of-type(3)');

justify.addEventListener('click', () => {
  contents.classList.toggle('justify');
  contents.classList.remove('left', 'center', 'right');
});
left.addEventListener('click', () => {
  contents.classList.toggle('left');
  contents.classList.remove('justify', 'center', 'right');
});
center.addEventListener('click', () => {
  contents.classList.toggle('center');
  contents.classList.remove('left', 'justify', 'right');
});
right.addEventListener('click', () => {
  contents.classList.toggle('right');
  contents.classList.remove('left', 'center', 'justify');
});

// small.addEventListener('click', () => {
//   contents.classList.remove('small');
//   contents.classList.remove('medium');
//   contents.classList.remove('large');
//   contents.classList.add('small');
// });
// medium.addEventListener('click', () => {
//   contents.classList.remove('small');
//   contents.classList.remove('medium');
//   contents.classList.remove('large');
//   contents.classList.add('medium');
// });
// large.addEventListener('click', () => {
//   contents.classList.remove('small');
//   contents.classList.remove('medium');
//   contents.classList.remove('large');
//   contents.classList.add('large');
// });

function setFontSize(size) {
  contents.classList.remove('small', 'medium', 'large');
  contents.classList.add(size);
}

small.addEventListener('click', () => setFontSize('small'));
medium.addEventListener('click', () => setFontSize('medium'));
large.addEventListener('click', () => setFontSize('large'));

// const tap = document.querySelector('.tap');
// const editing = document.querySelector('.editing');

// tap.addEventListener('click', (e) => {
//   let eTarget = e.target;
//   eTarget.classList.add('hidden');
//   editing.classList.add('on');
// });
