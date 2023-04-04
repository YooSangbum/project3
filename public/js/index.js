//  Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//리스트 스크롤링
const container = document.querySelector('.mySwiper');

container.addEventListener('wheel', scrollContainer);

function scrollContainer(e) {
  e.preventDefault();
  container.scrollTop += e.deltaY;
}

// 기억하고 싶은 이야기 버튼 솔팅
const rememberBtn = document.querySelector('.remember');

rememberBtn.addEventListener('click', filterPosts);

function filterPosts() {
  const postlist = document.querySelectorAll('.list');
  postlist.forEach((post) => {
    const bookmark = post.querySelector('.bookmark img');
    if (!bookmark || bookmark.getAttribute('src') === '') {
      post.parentElement.classList.add('hidden');
    } else {
      post.parentElement.classList.remove('hidden');
    }
  });
}
