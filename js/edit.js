const contents = document.querySelector('#contents');
const justify = document.querySelector('.fa-align-justify');
const left = document.querySelector('.fa-align-left');
const center = document.querySelector('.fa-align-center');
const right = document.querySelector('.fa-align-right');
const small = document.querySelector('.editing span:nth-of-type(1)');
const medium = document.querySelector('.editing span:nth-of-type(2)');
const large = document.querySelector('.editing span:nth-of-type(3)');

justify.addEventListener('click', () => {
  contents.classList.remove('left');
  contents.classList.remove('center');
  contents.classList.remove('right');
  contents.classList.remove('justify');
  contents.classList.add('justify');
});
left.addEventListener('click', () => {
  contents.classList.remove('left');
  contents.classList.remove('center');
  contents.classList.remove('right');
  contents.classList.remove('justify');
  contents.classList.add('left');
});
center.addEventListener('click', () => {
  contents.classList.remove('left');
  contents.classList.remove('center');
  contents.classList.remove('right');
  contents.classList.remove('justify');
  contents.classList.add('center');
});
right.addEventListener('click', () => {
  contents.classList.remove('left');
  contents.classList.remove('center');
  contents.classList.remove('right');
  contents.classList.remove('justify');
  contents.classList.add('right');
});

small.addEventListener('click', () => {
  contents.classList.remove('small');
  contents.classList.remove('medium');
  contents.classList.remove('large');
  contents.classList.add('small');
});
medium.addEventListener('click', () => {
  contents.classList.remove('small');
  contents.classList.remove('medium');
  contents.classList.remove('large');
  contents.classList.add('medium');
});
large.addEventListener('click', () => {
  contents.classList.remove('small');
  contents.classList.remove('medium');
  contents.classList.remove('large');
  contents.classList.add('large');
});
