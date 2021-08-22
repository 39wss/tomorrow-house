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

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  controls: false,
  gutter: 4,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  gutter: 6,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
