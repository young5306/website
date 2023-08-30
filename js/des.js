// plugin masonry

window.addEventListener("load", ()=>{
	
	const grid = new Isotope(".photo_wrap", { //배치할 요소를 감싸고 있는 부모 요소명
		itemSelector: ".photo_wrap img", //배치할 요소명
		columnWidth: ".photo_wrap img", //넓이값을 구할 요소명
		transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
	});
})

// 탭 메뉴
const tabList= document.querySelectorAll('.tab_menu .tab_list li');
const contents = document.querySelectorAll('.cont_area .cont');
let activeCont = "";

for(let i=0; i<tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(let j=0;j<tabList.length;j++){
      tabList[j].classList.remove('is_on');
      contents[j].style.display="none";
    }
    this.parentNode.classList.add('is_on');
    activeCont=this.getAttribute('href');
    document.querySelector(activeCont).style.display="block";
  })
}

// star 채우기 
//star에 따라 character 바꾸기
const starList = document.querySelectorAll('.star .star_fill i');
let starCount=4;
for(let i=0;i<starList.length;i++){
  starList[i].addEventListener('click', function(){
    if(starList[i].classList.contains('fa-regular')){
      for(let j=0;j<=i;j++){
        starList[j].classList.replace('fa-regular', 'fa-solid');
        starList[j].style.color="#fb0";
      }
    } else{
      for(let j=i+1;j<starList.length;j++){
        starList[j].classList.replace('fa-solid', 'fa-regular');
        starList[j].style.color="#ccc";
      }
    }

    let character = document.querySelector('.star_pic img');
    character.src=`./lotteCinema_img/character/character${i+1}.svg`;

    starCount=i;
  })
}









// 관람평 리스트에 추가
const submitBtn = document.querySelector('.review_write form button');

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  const text=document.querySelector('form textarea').value;
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1; 
  let date = today.getDate();
  let hrs = today.getHours();
  let min = today.getMinutes();
  if(month<10){month=`0${month}`;}
  if(date<10){date=`0${date}`;}
  if(hrs<10){hrs=`0${hrs}`;}
  if(min<10){min=`0${min}`;}

  const ul = document.querySelector('.review_list ul');
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML=`
  <div class="my_star"><img src="./lotteCinema_img/character/character${starCount+1}.svg"></div>
  <div class="my_review">
    <p>0*0</p>
    <p>${year}.${month}.${date} ${hrs}:${min}</p>
    <p>${text}</p>
  </div>
  <p>like</p>
  `;

}, {once:true})