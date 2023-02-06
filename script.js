const btnHamburger = document.querySelector('#btnHamburger');
const overlayAnim = document.querySelector('#overlay');
const overlayAnim2 = document.querySelector('#overlay2');
const fadeElems = document.querySelectorAll('.has-fade');
const fadeElems2 = document.querySelectorAll('.has-fade2');
const featuresSelector = document.querySelector('.features-subM');  
const featuresSubmenu = document.querySelector('.features-submenu'); 
const arrow1 = document.querySelector('.down-arrow1');
const companySelector = document.querySelector('.company-subM');
const companySubmenu = document.querySelector('.company-submenu');
const arrow2 = document.querySelector('.down-arrow2');
// Desktop
const featuresSubmenuDesktop = document.querySelector('.features-submenu-desktop');
const desktopFeatures = document.querySelector('.header-features');
const desktopArrow1 = document.querySelector('.header-arrow1');
const companySubmenuDesktop = document.querySelector('.company-submenu-desktop');
const desktopCompany = document.querySelector('.header-company');
const desktopArrow2 = document.querySelector('.header-arrow2');

btnHamburger.addEventListener('click', function(){

    if(btnHamburger.classList.contains('header-open')){ /* close Hamburger menu */
        btnHamburger.classList.remove('header-open');
        featuresSubmenu.classList.toggle('hidden');
        featuresSubmenu.classList.remove('show');
        arrow1.classList.remove("active");
        companySubmenu.classList.toggle('hidden');
        companySubmenu.classList.remove('show');
        arrow2.classList.remove("active");
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        fadeElems2.forEach(function(element){
            element.classList.remove('fade-in2');
            element.classList.add('fade-out2');
        });
    }
    else {                                             /*  open Hamburger menu */
        btnHamburger.classList.add('header-open');
        overlayAnim.classList.add('overlay');
        overlayAnim2.classList.add('overlay-2');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        fadeElems2.forEach(function(element){
            element.classList.remove('fade-out2');
            element.classList.add('fade-in2');
        });
    }
});


// Add sliding effect to hamburger menu components when the menu is opened

btnHamburger.addEventListener("click", function() {
    overlayAnim.classList.toggle("open");
    overlayAnim2.classList.toggle("open");
});


// Reveals the submenu for Features Mobile

featuresSelector.addEventListener('click', function() {
    if (!featuresSubmenu.classList.contains('show')) {
        featuresSubmenu.classList.remove('hidden');
        arrow1.classList.toggle('active');
        featuresSubmenu.classList.toggle('show');
    }
    else {
        featuresSubmenu.classList.toggle('hidden');
        featuresSubmenu.classList.remove('show');
        arrow1.classList.toggle("active");
    }
});

// Reveals the submenu for Company Mobile

companySelector.addEventListener('click', function() {
    if (!companySubmenu.classList.contains('show')) {
        companySubmenu.classList.remove('hidden');
        arrow2.classList.toggle('active');
        companySubmenu.classList.toggle('show');
    }
    else {
        companySubmenu.classList.toggle('hidden');
        companySubmenu.classList.remove('show');
        arrow2.classList.toggle("active");
    }
})


// Reveals the submenu for Features Desktop

desktopFeatures.addEventListener('click', function() {
    if (!featuresSubmenuDesktop.classList.contains('show')) {
      featuresSubmenuDesktop.classList.remove('hidden');
      desktopArrow1.classList.toggle('active');
      featuresSubmenuDesktop.classList.toggle('show');
      
    } else {
      featuresSubmenuDesktop.classList.toggle('hidden');
      featuresSubmenuDesktop.classList.remove('show');
      desktopArrow1.classList.toggle("active");
    }
});
  



// Reveals the submenu for Company Desktop

desktopCompany.addEventListener('click', function() {
    if (!companySubmenuDesktop.classList.contains('show')) {
      companySubmenuDesktop.classList.remove('hidden');
      desktopArrow2.classList.toggle('active');
      companySubmenuDesktop.classList.toggle('show');
    }
    else {
      companySubmenuDesktop.classList.toggle('hidden');
      companySubmenuDesktop.classList.remove('show');
      desktopArrow2.classList.toggle('active');
    }
})

  
// Dark Mode Toggle

const checkbox = document.getElementById('checkbox');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('.hero-heading');
const hamburgerMenus = document.querySelectorAll('.hamburger-menu');
const logo = document.querySelector('.header-logo .logo-img');

const heroBtn = document.querySelector('.hero-btn');

const heroImgMobile = document.querySelector('.img-container-mobile');
const heroImgDesktop = document.querySelector('.img-container-desktop');

const headerLinks = document.querySelectorAll('.header-link');
const headerArrows = document.querySelectorAll('.header-arrow');

const submenuOptions = document.querySelectorAll('.submenu-option');

window.onload = function() {
  checkbox.checked = false;
};

checkbox.addEventListener('change', function() {
  body.classList.toggle('dark-background');
  main.classList.toggle('dark-background');
  header.classList.toggle('light-text');
  overlay.classList.toggle('dark-background');
  heroBtn.classList.toggle('.light-button');
  featuresSubmenuDesktop.classList.toggle('dark-background');
  companySubmenuDesktop.classList.toggle('dark-background');
  desktopArrow1.classList.toggle('dark');
  desktopArrow2.classList.toggle('dark');


  headerLinks.forEach(function(headerLink) {
    headerLink.classList.toggle('light-text');
  })

  submenuOptions.forEach(function(submenuOption) {
    submenuOption.classList.toggle('gray-text');
  })
  
  headerArrows.forEach(function(headerArrow) {
    headerArrow.classList.toggle('.light-filter');
  })

  if (checkbox.checked) {
    logo.setAttribute("xlink:href", "images/logo-dark.svg");
  } else {
    logo.setAttribute("xlink:href", "images/logo.svg");
  }

  hamburgerMenus.forEach(function(hamburgerMenu) {
    hamburgerMenu.classList.toggle('light-background');
  });
});

