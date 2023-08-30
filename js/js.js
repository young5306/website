// 슬라이드쇼
var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n){
  var i;
  var slides = document.querySelectorAll('.slideshow_box');
  var dots = document.querySelectorAll('.dot');
  if(n>=slides.length) {slideIndex=0}
  if(n<0) {slideIndex=slides.length-1}
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  } 
  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace(" active", "");
    // classList는 왜 오류 뜨지
  }
  slides[slideIndex].style.display="block";
  dots[slideIndex].className += " active"; //classList가능?
}

function moveSlides(n){
  slideIndex+=n;
  showSlides(slideIndex);
}
function currentSlide(n){
  slideIndex=n;
  showSlides(slideIndex);
}

// 티저 재생
const lists = document.querySelectorAll('.slideshow_box');
for(let el of lists){
  let playbttn = el.querySelector('.playbttn');
  let teaserWrap = playbttn.nextSibling.nextSibling;
  playbttn.addEventListener('click', () => {
    teaserWrap.style.display="block";
    teaserWrap.querySelector('.teaser_box video').load();
    teaserWrap.querySelector('.teaser_box video').play();
  })
  let close = el.querySelector('span');
  close.addEventListener('click', () => {
    teaserWrap.style.display="none";
    teaserWrap.querySelector('.teaser_box video').pause();
  })
}


// 포스터 슬라이드
var pSlides = document.querySelector('#poster_slides'),
    pSlide = document.querySelectorAll('.poster_box'),
    pCurrentIdx = 0,
    pSlideCount = pSlide.length,
    prevBtn = document.querySelector('.poster_arrow_prev'),
    nextBtn = document.querySelector('.poster_arrow_next'),
    pSlideWidth = 184,
    pSlideMargin = 15;

  pSlides.style.width = (pSlideWidth + pSlideMargin)*pSlideCount - pSlideMargin + 'px';
  // 이거 왜 필요하지...
  pMoveNum = pSlideWidth + pSlideMargin;

  function movepSlide(num){
    pSlides.style.left=-num*pMoveNum+'px';
    pCurrentIdx=num;
  }
  nextBtn.addEventListener('click', function(){
    if(pCurrentIdx<pSlideCount-5){
      movepSlide(pCurrentIdx+1);
    }
    if(pCurrentIdx>=pSlideCount-5){
      nextBtn.style.display="none";
    } else{
      nextBtn.style.display="block";
    }
    if(pCurrentIdx<=0){
      prevBtn.style.display="none";
    } else{
      prevBtn.style.display="block";
    }
  })
  prevBtn.addEventListener('click', function(){
    if(pCurrentIdx>0){
      movepSlide(pCurrentIdx-1);
    }
    if(pCurrentIdx>=pSlideCount-5){
      nextBtn.style.display="none";
    } else{
      nextBtn.style.display="block";
    }
    if(pCurrentIdx<=0){
      prevBtn.style.display="none";
    } else{
      prevBtn.style.display="block";
    }
    // else{prevBtn.style.display="none";}
  })
 

// 시계 (분단위)
var clock = document.querySelector('.clock');
const today = new Date();
var month = today.getMonth()+1;
var date = today.getDate();
var hrs = today.getHours();
var min = today.getMinutes();
if(month<10){
  month=`0${month}`;
}
if(date<10){
  date=`0${date}`;
}
if(hrs<10){
  hrs=`0${hrs}`;
}
if(min<10){
  min=`0${min}`;
}
var clockResult = `${month}.${date} ${hrs}:${min} 기준`;
clock.textContent=clockResult;