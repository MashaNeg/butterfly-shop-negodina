$(document).ready(function(){

  // Бургер
  $('.j-burger').on('click', function(){

    $('.j-menu').slideToggle();
  });

  // Табы в контактах
  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.j-tabs-link');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  });

  // Фильтр в наших работах
  $('.j-catalog-link').on('click', function(event){
    event.preventDefault();

    $('.j-catalog-link').removeClass('active');
    $(this).addClass('active');

    let filterData = $(this).data('filter');

    console.log(filterData);

    if (filterData === 'all') {
      $('.services-item').show();
      return;
    }

    $('.services-item').each(function(){

      let typeData = $(this).data('type');

      if (filterData === typeData) {
        $(this).show();
      } else {
        $(this).hide();
      }

    });
  });

  // Аккордеон
  let prevFaqBtn;

  $('.j-faq-btn').on('click', function(){

    if( prevFaqBtn === this) {
      $(this).next().slideToggle();

      return;
    }

    $('.j-faq-btn').next().slideUp();
    $(this).next().slideDown();

    prevFaqBtn = this;
  })

  // Карусель в отзывах
  $('.j-reviews-corousel').slick();



});
