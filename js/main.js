
$(function () {
  
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
  

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.footer__menu')) {

    var dropdowns = document.getElementsByClassName("foote__date-inner");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
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























});
