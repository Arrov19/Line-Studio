const body = document.querySelector('body'),
 callbackTel = document.querySelector('.callback__tel'),
 priceSelectButton = document.querySelectorAll('.price__select-button'),
 briefSelectButton = document.querySelectorAll('.brief__select-button-name'),
 priceBlock = document.querySelectorAll('.price__block'),
 menuBurger = document.querySelector('.menu-burger');
let BtnForBrief = 'landingPage',
 inputsTel = document.querySelectorAll('input[type="tel"]'),
 width = screen.width,
 height = screen.height;

callbackTel.addEventListener('keydown', function () {
 function callback() {
  if (callbackTel.value != 0) {
   callbackTel.classList.add('callback__tel_active')
  } else {
   callbackTel.classList.remove('callback__tel_active')
  }
 }

 setTimeout(function () { callback() }, 10);
})

window.onclick = function (e) {
 if (e.target.classList.contains('price__select-button')) {

  for (let i = 0; i < priceSelectButton.length; i++) {
   priceSelectButton[i].classList.remove('price__select-button_active');
   priceBlock[i].classList.remove('price__block_active');
   if (priceBlock[i].id.toLowerCase() == 'block' + e.target.id.toLowerCase()) {
    priceBlock[i].classList.add('price__block_active')
   }
  }
  e.target.classList.add('price__select-button_active')
  BtnForBrief = e.target.id;
 }
 else if (e.target.classList.contains('brief__select-button-name')) {
  for (let i = 0; i < briefSelectButton.length; i++) {
   briefSelectButton[i].classList.remove('brief__select-button-name_active')
  }
  e.target.classList.add('brief__select-button-name_active')
  BtnForBrief = e.target.htmlFor;
 }
 else if (e.target.classList.contains('price__btn')) {
  for (let i = 0; i < briefSelectButton.length; i++) {
   briefSelectButton[i].classList.remove('brief__select-button-name_active');
   if ('price' + briefSelectButton[i].htmlFor.toLowerCase() == BtnForBrief.toLowerCase() || briefSelectButton[i].htmlFor == BtnForBrief) {
    briefSelectButton[i].classList.add('brief__select-button-name_active')
   }
  }
 }
 else if (menuBurger.contains(e.target) || e.target.classList.contains('bg')) {
  body.classList.toggle('navbar-active')
 }
}

setInterval(function () {
 if (screen.width !== width) {
  width = screen.width;
  body.classList.remove('navbar-active')
 }
}, 50);

Inputmask({
 "mask": "+7 (999) 999-99-99",
 showMaskOnHover: false,
 removeMaskOnSubmit: true
}).mask(inputsTel);
