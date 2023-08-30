// 탭 메뉴

const tabList = document.querySelectorAll(".tab_menu .list li");
const contents = document.querySelectorAll(".tab_menu .cont_area .cont");
let activeCount = "";

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }
    this.parentNode.classList.add("is_on");
    activeCount = this.getAttribute("href");
    document.querySelector(activeCount).style.display = "block";
  });
}
//도메인
const domainListEl = document.querySelector("#domain_list");
const domainInputEl = document.querySelector("#domain_txt");
domainListEl.addEventListener("change", (e) => {
  if (e.target.value !== "type") {
    domainInputEl.value = e.target.value;
    domainInputEl.disabled = true;
  } else {
    domainInputEl.value = "";
    domainInputEl.disabled = false;
  }
});

//출생년도
const birthYearEl = document.querySelector("#birth #year");
isYearOptionExisted = false;
let today = new Date();
birthYearEl.addEventListener("focus", function () {
  //최초 클릭
  if (!isYearOptionExisted) {
    isYearOptionExisted = true;
    for (var i = today.getFullYear(); i >= 1900; i--) {
      const yearOption = document.createElement("option");
      yearOption.setAttribute("value", i);
      yearOption.innerText = i;
      this.appendChild(yearOption);
    }
  }
});

const birthMonthEl = document.querySelector("#birth #month");
isMonthOptionExisted = false;
birthMonthEl.addEventListener("focus", function () {
  //최초 클릭
  if (!isMonthOptionExisted) {
    isMonthOptionExisted = true;
    for (var i = 1; i <= 12; i++) {
      const monthOption = document.createElement("option");
      monthOption.setAttribute("value", i);
      monthOption.innerText = i;
      this.appendChild(monthOption);
    }
  }
});

const birthDayEl = document.querySelector("#birth #day");
isDayOptionExisted = false;
birthDayEl.addEventListener("focus", function () {
  //최초 클릭
  if (!isDayOptionExisted) {
    isDayOptionExisted = true;
    for (var i = 1; i <= 31; i++) {
      const dayOption = document.createElement("option");
      dayOption.setAttribute("value", i);
      dayOption.innerText = i;
      this.appendChild(dayOption);
    }
  }
});

// 유효성 검사

let userid = document.querySelector("#tab1 input#userid");
let userpwd = document.querySelector("#tab1 input#pwd");
let btn = document.querySelector("#tab1 button");

btn.addEventListener("click", function () {
  if (userid.value === "") {
    alert("아이디를 입력하세요.");
  } else if (userpwd.value === "") {
    alert("비밀번호를 입력하세요.");
  }
});

let pwd1 = document.querySelector("#user_pwd1 input");
let pwd2 = document.querySelector("#user_pwd2 input");
let checkbtn = document.querySelector("#user_pwd1 .check");
let content1 = document.querySelector("#user_pwd1 .content");
let content2 = document.querySelector("#user_pwd2 .content");

// 비밀번호 확인
// 1) 영문, 숫자, 특수기호 조합으로 8자리 이상 (alert)
// 2) 비밀번호 재확인 (pwd2아래)

let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

// checkbtn.addEventListener("click", function () {
//   if (!regPass.test(pwd1.value)) {
//     content1.innerText =
//       "영문, 숫자, 특수기호 조합 8자리 이상의 비밀번호를 입력하세요.";
//   } else {
//     content1.innerText = "";
//   }
// });

let flag = 0;
pwd2.addEventListener("keyup", function (e) {
  if (pwd1.value.length == pwd2.value.length) {
    for (let i = 0; i < pwd2.value.length; i++) {
      if (pwd1.value[i] == pwd2.value[i]) {
        flag = 1;
      } else {
        flag = 0;
        break;
      }
    }
  } else {
    flag = 0;
  }
  if (flag == 0) {
    content2.innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    content2.innerText = "비밀번호가 일치합니다.";
  }
});
