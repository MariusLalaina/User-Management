const profil = document.querySelector('.profil');
const action = document.querySelector('.action');

profil.addEventListener("mouseenter", function(){
    action.style.display ="flex"
})
profil.addEventListener("mouseleave", function(){
  action.style.display ="none"
})