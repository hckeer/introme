/*==================================
  PORTFOLIO - MAIN JAVASCRIPT
  Handles all interactive features
==================================*/

(function() {
  'use strict';

  /* ===== UTILITY FUNCTIONS ===== */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onScroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /* ===== LOADER ===== */
  window.addEventListener('load', () => {
    const loader = select('#loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500);
    }
  });

  /* ===== THEME TOGGLE ===== */
  const themeToggle = select('#theme-toggle');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  function updateThemeIcon(theme) {
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (theme === 'dark') {
        icon.className = 'fas fa-moon';
      } else {
        icon.className = 'fas fa-sun';
      }
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  /* ===== HEADER SCROLL EFFECT ===== */
  const header = select('#header');

  function headerScrolled() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', headerScrolled);
  headerScrolled();

  /* ===== MOBILE NAVIGATION ===== */
  const navToggle = select('#nav-toggle');
  const navClose = select('#nav-close');
  const navMenu = select('#nav-menu');
  const navLinks = select('.nav-link', true);

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('active');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  }

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* ===== ACTIVE LINK ON SCROLL ===== */
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const link = select(`.nav-link[href*="${sectionId}"]`);

      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActive);
  scrollActive();

  /* ===== SMOOTH SCROLL FOR NAVIGATION LINKS ===== */
  const scrollLinks = select('a[href^="#"]', true);

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const targetSection = select(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ===== BACK TO TOP BUTTON ===== */
  const backToTop = select('#backToTop');

  function toggleBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ===== ANIMATED TIMELINE PROGRESS BARS ===== */
  const progressBars = select('.progress-bar', true);
  let skillsAnimated = false;

  function animateSkills() {
    if (skillsAnimated) return;

    const skillsSection = select('#skills');
    if (!skillsSection) return;

    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > skillsSectionTop && window.scrollY < skillsSectionTop + skillsSectionHeight) {
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress + '%');
      });
      skillsAnimated = true;
    }
  }

  window.addEventListener('scroll', animateSkills);
  animateSkills();

  /* ===== TYPING EFFECT ===== */
  const typingText = select('.typing-text');

  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    // Start typing after page loads
    setTimeout(typeWriter, 1000);
  }

  /* ===== VANTA.JS 3D BACKGROUND ===== */
  if (typeof VANTA !== 'undefined') {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x6366f1,
      backgroundColor: 0x0f172a,
      points: 10.00,
      maxDistance: 25.00,
      spacing: 18.00
    });
  }

  /* ===== CUSTOM ANIMATED CURSOR ===== */
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let dotX = 0;
  let dotY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor follow animation
  function animateCursor() {
    // Smooth following with easing
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Add hover effect on interactive elements
  const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card, .nav-link');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-hover');
    });
  });

  /* ===== MAGNETIC BUTTONS ===== */
  const magneticButtons = document.querySelectorAll('.btn, .social-icon, .project-link, .back-to-top');

  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic pull effect (max 15px)
      const moveX = x * 0.3;
      const moveY = y * 0.3;

      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });

    button.addEventListener('mouseleave', function() {
      button.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  /* ===== AOS (ANIMATE ON SCROLL) INITIALIZATION ===== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }

  /* ===== CONTACT FORM VALIDATION & SUBMISSION ===== */
  const contactForm = select('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors
      const errors = select('.form-error', true);
      errors.forEach(error => error.textContent = '');

      // Get form values
      const name = select('#name').value.trim();
      const email = select('#email').value.trim();
      const subject = select('#subject').value.trim();
      const message = select('#message').value.trim();

      let isValid = true;

      // Validate name
      if (name === '') {
        showError('name-error', 'Please enter your name');
        isValid = false;
      } else if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
      }

      // Validate email
      if (email === '') {
        showError('email-error', 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
      }

      // Validate subject
      if (subject === '') {
        showError('subject-error', 'Please enter a subject');
        isValid = false;
      } else if (subject.length < 5) {
        showError('subject-error', 'Subject must be at least 5 characters');
        isValid = false;
      }

      // Validate message
      if (message === '') {
        showError('message-error', 'Please enter your message');
        isValid = false;
      } else if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        isValid = false;
      }

      if (isValid) {
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
          // Reset form
          contactForm.reset();

          // Show success message
          showFormStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');

          // Reset button
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;

          // Hide success message after 5 seconds
          setTimeout(() => {
            hideFormStatus();
          }, 5000);
        }, 2000);
      }
    });
  }

  function showError(elementId, message) {
    const errorElement = select(`#${elementId}`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showFormStatus(type, message) {
    const formStatus = select('#form-status');
    if (formStatus) {
      formStatus.className = `form-status ${type}`;
      formStatus.textContent = message;
    }
  }

  function hideFormStatus() {
    const formStatus = select('#form-status');
    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.textContent = '';
    }
  }

  /* ===== REAL-TIME INPUT VALIDATION ===== */
  const formInputs = select('input, textarea', true);

  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      const inputId = this.id;
      const value = this.value.trim();
      const errorId = `${inputId}-error`;

      if (inputId === 'name' && value !== '' && value.length < 2) {
        showError(errorId, 'Name must be at least 2 characters');
      } else if (inputId === 'email' && value !== '' && !isValidEmail(value)) {
        showError(errorId, 'Please enter a valid email address');
      } else if (inputId === 'subject' && value !== '' && value.length < 5) {
        showError(errorId, 'Subject must be at least 5 characters');
      } else if (inputId === 'message' && value !== '' && value.length < 10) {
        showError(errorId, 'Message must be at least 10 characters');
      } else {
        showError(errorId, '');
      }
    });
  });

  /* ===== SCROLL REVEAL ANIMATIONS ===== */
  const revealElements = select('[data-aos]', true);

  function checkReveal() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal();

  /* ===== PROJECT CARD TILT EFFECT (Optional Enhancement) ===== */
  const projectCards = select('.project-card', true);

  projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  /* ===== CONSOLE MESSAGE ===== */
  console.log('%c👋 Welcome to my portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
  console.log('%c🚀 Built with Jekyll, SCSS, and JavaScript', 'color: #ec4899; font-size: 14px;');
  console.log('%c💼 Check out my projects and feel free to reach out!', 'color: #14b8a6; font-size: 14px;');

})();

  /* ===== SCROLL PROGRESS BAR ===== */
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  }

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();

  /* ===== PARALLAX SCROLLING ===== */
  const parallaxElements = document.querySelectorAll('.hero-image, .about-image');

  function parallaxScroll() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.05; // Different speeds for different elements
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  window.addEventListener('scroll', parallaxScroll);

  /* ===== UI SOUNDS ===== */
  let soundEnabled = localStorage.getItem('soundEnabled') !== 'false'; // Default: true
  const soundToggle = document.getElementById('soundToggle');

  // Create audio context for UI sounds
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext;

  function initAudioContext() {
    if (!audioContext) {
      audioContext = new AudioContext();
    }
  }

  // Play UI sound
  function playSound(frequency = 800, duration = 50, type = 'sine') {
    if (!soundEnabled || !audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  }

  // Update sound toggle UI
  function updateSoundToggle() {
    if (soundToggle) {
      const icon = soundToggle.querySelector('i');
      if (soundEnabled) {
        icon.className = 'fas fa-volume-up';
        soundToggle.classList.remove('muted');
      } else {
        icon.className = 'fas fa-volume-mute';
        soundToggle.classList.add('muted');
      }
    }
  }

  // Sound toggle button
  if (soundToggle) {
    updateSoundToggle();
    
    soundToggle.addEventListener('click', () => {
      initAudioContext();
      soundEnabled = !soundEnabled;
      localStorage.setItem('soundEnabled', soundEnabled);
      updateSoundToggle();
      
      // Play confirmation sound
      if (soundEnabled) {
        playSound(600, 100);
        setTimeout(() => playSound(800, 100), 100);
      }
    });
  }

  // Add sounds to interactive elements
  document.addEventListener('click', (e) => {
    initAudioContext();
    
    if (e.target.closest('.btn, .nav-link')) {
      playSound(800, 50);
    } else if (e.target.closest('.social-icon, .project-link')) {
      playSound(1000, 40);
    } else if (e.target.closest('.theme-toggle')) {
      playSound(600, 60, 'triangle');
    }
  });

  // Hover sounds
  document.querySelectorAll('.btn, .project-card, .skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      initAudioContext();
      playSound(400, 30);
    });
  });

