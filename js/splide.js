var splide = new Splide( '.splide', {
    type: 'loop',
//   drag: 'free',
  snap: true,
  autoplay: true,
  pagination: false,
  effect:'fade',
  autoplay: {
    delay:5000,
  }
} );

splide.mount();