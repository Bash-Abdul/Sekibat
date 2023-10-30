var splide = new Splide( '.splide', {
    type: 'loop',
//   drag: 'free',
  snap: true,
  autoplay: true,
  effect:'fade',
  autoplay: {
    delay:5000,
  }
} );

splide.mount();