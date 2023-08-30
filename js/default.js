// 배너
const $top_banner_wrapper = document.querySelector("#top_banner_wrapper");
const close_banner = document.querySelector("#top_banner span");
close_banner.addEventListener("click", () => {
  $top_banner_wrapper.style.display = "none";
});
