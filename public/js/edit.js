// editing
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

function setFontSize(size) {
  contents.classList.remove('small', 'medium', 'large');
  contents.classList.add(size);
}

small.addEventListener('click', () => setFontSize('small'));
medium.addEventListener('click', () => setFontSize('medium'));
large.addEventListener('click', () => setFontSize('large'));

// 날짜
document.getElementById('currentDate').value = new Date()
  .toISOString()
  .substring(0, 10);

// 북마크 값 넣기
const bookmarkCheckbox = document.getElementById('bookmark');
let condition;

bookmarkCheckbox.addEventListener('click', function () {
  if (this.checked) {
    condition = true;
    bookmarkCheckbox.value =
      'https://github.com/YooSangbum/project3/blob/master/public/image/%EC%B1%85%EA%B0%88%ED%94%BC1.png?raw=true';
  } else {
    condition = false;
    bookmarkCheckbox.value = '';
    // bookmarkCheckbox.removeAttribute('value');
  }
});

// 북마크 클릭 변경
const bookmark = document.querySelector('.bookmark');
let bookmarkImg = `<img src="/public/image/책갈피.png" alt="" />`;

bookmark.innerHTML = bookmarkImg;

bookmark.addEventListener('click', (e) => {
  const input = document.querySelector('#bookmark[type="checkbox"]');
  const $true = input.checked;
  if (!$true) {
    let bookmarkImg = `<img src="/public/image/책갈피on.svg" alt="" />`;
    bookmark.innerHTML = bookmarkImg;
  } else {
    let bookmarkImg = `<img src="/public/image/책갈피.png" alt="" />`;

    bookmark.innerHTML = bookmarkImg;
  }
});

// 카테고리 크기 키우기
const categori = document.querySelectorAll('.categori label');

categori.forEach((item) => {
  item.addEventListener('click', () => {
    categori.forEach((item) => {
      item.classList.remove('on');
    });
    item.classList.add('on');
  });
});
