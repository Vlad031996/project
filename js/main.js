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