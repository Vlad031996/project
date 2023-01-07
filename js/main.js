
$(function () {
  
  // ================ accordion ====================
  // ================ accordion ====================

  $('.accordion__conteant-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('accordion__conteant-link--active')) {
      $(this).removeClass('accordion__conteant-link--active')
      $(this).children('.accordion__text').slideUp()
    } else {
      $('.accordion__conteant-link').removeClass('accordion__conteant-link--active')
      $('.accordion__text').slideUp()
      $(this).addClass('accordion__conteant-link--active')
      $(this).children('.accordion__text').slideDown()
    }
  })
  


 // ===================== BYRGER ===============================

 setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false)  {
    $('.burger').addClass('burger--folow')
  } else {
    $('.burger').removeClass('burger--folow')
  }
},0)
$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.burger, header__inner').toggleClass('active')
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show') 
})


  // ================ accordion-2 ====================
  // ================ accordion-2 ====================

  $('.members__reviews').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('accordion__conteant-link--active')) {
      $(this).removeClass('accordion__conteant-link--active')
      $(this).children('.members__user-title').slideUp()
    } else {
      $('.members__reviews').removeClass('accordion__conteant-link--active')
      $('.amembers__user-title').slideUp()
      $(this).addClass('accordion__conteant-link--active')
      $(this).children('.members__user-title').slideDown()
    }
  })
  


// ==============================================================

const openMenu = document.querySelector('.open-button');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu.nextElementSibling.classList.toggle('open-content--show')
});

// ==============================================================




















});
