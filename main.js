// const profil = document.querySelector('.profil');
// const action = document.querySelector('.action');
// const avatar = document.querySelector('.avatar');
const form = document.querySelector('.form');
const add = document.querySelector('.add');
const done = document.querySelector('.done');
const close = document.querySelector('.close');
const profilAvatar = document.querySelector('.profil_avatar');
const po = document.querySelector('.user');
const mail = document.querySelector('.mail');
const trash = document.querySelector('.trash');
const edit = document.querySelector('.edit');
const cards = document.querySelector('.cards');

/*profil.addEventListener("mouseenter", function(){
    action.style.display ="flex";
})
profil.addEventListener("mouseleave", function(){
  action.style.display ="none";
})*/
add.addEventListener('click', function () {
  form.showModal();
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";
})
done.addEventListener('click', function () {
  let profil = document.createElement('div');
  let info = document.createElement('div');
  let action = document.createElement('div');
  
  profil.classList.add("profil");
  info.classList.add("info");
  action.classList.add("action");
  let img = document.createElement('img');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  img.classList.add("avatar");
  img.src = profilAvatar.value;
  img.alt = "Image";
  p1.textContent = po.value;
  p2.textContent = mail.value;
  profilAvatar.value = "";
  po.value = "";
  mail.value = "";
  action.appendChild(trash);
  action.appendChild(edit);
  info.appendChild(p1);
  info.appendChild(p2);
  profil.appendChild(img);
  profil.appendChild(info);
  profil.appendChild(action);
  cards.appendChild(profil);
})
close.addEventListener('click', function () {
  form.close();
  form.style.display = "none";
})
console.log(cards);