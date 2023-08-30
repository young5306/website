//영화관
let depth1_list=document.querySelectorAll('.cinema .depth1>li');
for(el of depth1_list){
  let region = el.querySelector(':first-child');

  region.addEventListener('click', (e)=>{
    for(el of depth1_list){
      el.querySelector(':first-child').style.backgroundColor="#eee";
    }
    e.currentTarget.style.backgroundColor="#fff";

    el.querySelector('.depth2').style.display="none";
    let depth2 = e.currentTarget.nextSibling.nextSibling;
    depth2.style.display="block";
  })
}
