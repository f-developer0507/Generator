var owl = $('.owl-carousel');

owl.owlCarousel({
  items: 4,
  margin: 26,
  loop: true,
  autoWidth: true,
});

// Go to the previous item
$('.carousel-control__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});
// Go to the next item
$('.carousel-control__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});