// scroll-to-hero.js
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-down");
  const heroSection = document.getElementById("hero");

  if (scrollButton && heroSection) {
    scrollButton.addEventListener("click", function () {
      heroSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// navbar visibility
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");
  const intro = document.querySelector(".intro-showcase");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("visible");
      } else {
        navbar.classList.remove("visible");
      }
    },
    { threshold: 0.1 }
  );

  if (intro) observer.observe(intro);
});

// stats for the hero section
const hero = document.getElementById('hero');

let lastTriggered = 0;
const triggerDelay = 1000;

const animateStats = () => {
  const now = Date.now();
  if (now - lastTriggered < triggerDelay) return;
  lastTriggered = now;

  const counters = document.querySelectorAll('.number');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
    }
  });
}, { threshold: 0.6 });

observer.observe(hero);


  // Arrow function
  const sliderTrack = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

// testimonial section
const slider = document.getElementById('testimonialSlider');

if (slider) {
  slider.innerHTML += slider.innerHTML;
}

slider.addEventListener('mouseenter', () => {
  slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
  slider.style.animationPlayState = 'running';
});

// faq section
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');
    });
  });

// Location slider loop effect
const locationSlider = document.querySelector('.location-slider');
if (locationSlider && locationSlider.children.length > 0) {
  locationSlider.innerHTML += locationSlider.innerHTML;
}