const profil = document.querySelector('.profil');
const action = document.querySelector('.action');
const avatar = document.querySelector('.avatar');
const form = document.querySelector('.form');
const add = document.querySelector('.add');
const done = document.querySelector('.done');
const close = document.querySelector('.close');

profil.addEventListener("mouseenter", function(){
    action.style.display ="flex";
})
profil.addEventListener("mouseleave", function(){
  action.style.display ="none";
})
add.addEventListener('click',function(){
  form.showModal();
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";


})
close.addEventListener('click', function(){
  form.close();
  form.style.display = "none";
})