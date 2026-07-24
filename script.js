document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark/Light Theme Switching
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      themeIcon.className = 'fa-solid fa-moon';
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      themeIcon.className = 'fa-solid fa-sun';
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // 2. Publication Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubItems = document.querySelectorAll('.pub-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      pubItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'grid';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });
    });
  });

  // 3. BibTeX Accordion Toggle
  const bibtexBtns = document.querySelectorAll('.bibtex-toggle');

  bibtexBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetBox = document.getElementById(targetId);

      if (targetBox) {
        targetBox.classList.toggle('show');
      }
    });
  });

  // 4. ScrollSpy for Active Nav Links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Update Current Year in Footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
