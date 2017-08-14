'use strict';

window.onscroll = scrollMenu;
window.onload = onLoad;
showMenu();

function scrollMenu(){
  let menu = document.querySelector('nav');
  let top = window.pageYOffset || document.documentElement.scrollTop;
  let wHeight = window.innerHeight;
  let navHeight = menu.offsetHeight;
  let vHeight = wHeight - navHeight;

  if (top > vHeight) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
}

function showMenu(){
  let hamburger = document.querySelector('.hamburger');
  let mainMenu = document.querySelector('.main-menu');
  let socials = document.querySelector('.socials');
  let linkMenu = mainMenu.querySelectorAll('a');

  setMobileCodeOfConduct();

  hamburger.addEventListener('click', showMainMenuAndSocial);
  linkMenu.forEach(addEventClick);

  function setMobileCodeOfConduct() {
    let mediaQuery = window.window.matchMedia('(max-width: 959px)');
    if (mediaQuery.matches) {
      let link = document.querySelector('a[href="#code-of-conduct"]');
      link.href = 'codigo-de-conduta.html';

      let li = document.createElement('li');
      li.classList.add('close');
      let span = document.createElement('span');
      let img = document.createElement('img');
      img.src = 'images/close.svg';

      span.appendChild(img);
      li.appendChild(span);
      mainMenu.insertBefore(li, mainMenu.firstChild);

      span.addEventListener('click', hideMainMenuAndSocials);
    }
  }

  function hideMainMenuAndSocials(){
    mainMenu.classList.remove('showup');
    socials.classList.remove('showup');
  }

  function showMainMenuAndSocial(){
    mainMenu.classList.add('showup');
    socials.classList.add('showup');
  }

  function addEventClick(link) {
    link.addEventListener('click', hideMainMenuAndSocials);
  }
}

function onLoad(){
  let mq = window.matchMedia('(min-width: 1200px)');
  let locationMap = document.querySelector('#local');
  mq.addListener(loadMap);
  loadMap();

  function loadMap() {
    if (mq.matches) {
      let mapa = document.createElement('iframe');
      mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8046485332347!2d-46.53700898502064!3d-23.647166084640315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c086c8a55d%3A0x9b8d9d9562e371ed!2sHotel+Mercure+Santo+Andr%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1501360766343'; // eslint-disable-line max-len
      mapa.style.border = '0';
      locationMap.insertBefore(mapa, locationMap.firstChild);
      mq.removeListener(loadMap);
    }
  }
}
