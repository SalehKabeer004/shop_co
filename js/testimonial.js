const sliderWrapper = document.getElementById('slider-wrapper');
  const testimonials = sliderWrapper.children;
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  const testimonialCount = testimonials.length / 2; // because of duplicates
  const testimonialWidth = testimonials[0].offsetWidth + 20; // width + margin-right

  let currentIndex = 0;
  let isTransitioning = false;

  // Set initial translateX to 0
  sliderWrapper.style.transform = `translateX(0px)`;

  prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex--;
    slide();

  });

  nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex++;
    slide();
  });

  function slide() {
    sliderWrapper.style.transition = `transform 0.5s ease-in-out`;
    sliderWrapper.style.transform = `translateX(${-testimonialWidth * currentIndex}px)`;
  }

  // Loop effect with clones
  sliderWrapper.addEventListener('transitionend', () => {
    if (currentIndex === testimonialCount) {
      // We've slid into the duplicate set at the end, jump back to start
      sliderWrapper.style.transition = 'none';
      currentIndex = 0;
      sliderWrapper.style.transform = `translateX(0px)`;
    }
    if (currentIndex < 0) {
      // We've slid before the first item - jump to the duplicates at the end
      sliderWrapper.style.transition = 'none';
      currentIndex = testimonialCount - 1;
      sliderWrapper.style.transform = `translateX(${-testimonialWidth * currentIndex}px)`;
    }
    isTransitioning = false;
  });

  // Responsive: update width on resize
  window.addEventListener('resize', () => {
    const newWidth = testimonials[0].offsetWidth + 20;
    sliderWrapper.style.transition = 'none';
    sliderWrapper.style.transform = `translateX(${-newWidth * currentIndex}px)`;
  });