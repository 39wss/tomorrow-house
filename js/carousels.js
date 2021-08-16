const productCarousel = tns({
  container: '.product-carousel .slider-list',
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  slideBy: 'page',
  autoplay: true,
  controls: false,
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  gutter: 4,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controls: false,
  responsive: {
    768: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    },
  },
})
