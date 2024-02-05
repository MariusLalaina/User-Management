const profil = document.querySelector('.profil');
// const action = document.querySelector('.action');
// const avatar = document.querySelector('.avatar');
const form = document.querySelector('.form');
const add = document.querySelector('.add');
const done = document.querySelector('.done');
const close = document.querySelector('.close');
const profilAvatar = document.querySelector('.profil_avatar');
const po = document.querySelector('.user');
const mail = document.querySelector('.mail');

const cards = document.querySelector('.cards');

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
  let trash = document.createElement('p');
  let edit = document.createElement('p');
  trash.textContent = "Suppr";
  edit.textContent = "Edit";
  profil.classList.add("profil");
  info.classList.add("info");
  action.classList.add("action");
  let img = document.createElement('img');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  img.classList.add("avatar");
  var reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(profilAvatar.files[0]); 
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
  profil.addEventListener("mouseenter", function(){
    action.style.display ="flex";
})
profil.addEventListener("mouseleave", function(){
  action.style.display ="none";
})
form.style.display = "none";
})
close.addEventListener('click', function () {
  form.close();
  form.style.display = "none";
})

console.log(cards);