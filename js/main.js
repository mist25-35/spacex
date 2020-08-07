var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webm', // URL or relative path to webm video
    poster: 'video/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
});
  var rellax = new Rellax(".rocket", {
    breakpoints: [576, 678, 960]
  });

  if(document.body.clientWidth < 600){
    rellax.destroy();
  }
  AOS.init();