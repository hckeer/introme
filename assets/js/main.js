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

  /* ===== ANIMATED SKILL BARS ===== */
  const skillBars = select('.skill-progress', true);
  let skillsAnimated = false;

  function animateSkills() {
    if (skillsAnimated) return;

    const skillsSection = select('#skills');
    if (!skillsSection) return;

    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > skillsSectionTop && window.scrollY < skillsSectionTop + skillsSectionHeight) {
      skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
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

  /* ===== PARTICLES.JS CONFIGURATION ===== */
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#6366f1'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#6366f1',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

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
