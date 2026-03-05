// ============================================================
//  KCC Institutes Website Clone — script.js
// ============================================================

// -------- HERO SLIDER --------
(function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
    let timer;

    function goTo(idx) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (idx + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
        timer = setInterval(next, 5000);
    }

    function resetAuto() {
        clearInterval(timer);
        startAuto();
    }

    document.getElementById('nextSlide')?.addEventListener('click', () => { next(); resetAuto(); });
    document.getElementById('prevSlide')?.addEventListener('click', () => { prev(); resetAuto(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    });

    startAuto();
})();


// -------- STUDY WITH US TABS --------
(function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(target + '-content')?.classList.add('active');
        });
    });
})();


// -------- LIFE AT KCC TABS --------
(function () {
    const lifeTabs = document.querySelectorAll('.life-tab');

    lifeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            lifeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In a full impl content panels would swap here
        });
    });
})();


// -------- HAMBURGER MENU --------
(function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mainNav');

    hamburger?.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamburger.classList.toggle('is-open');
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            hamburger.classList.remove('is-open');
        });
    });
})();


// -------- STICKY HEADER (hide announce bar on scroll) --------
(function () {
    const header = document.getElementById('mainHeader');
    let lastY = 0;

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;

        if (currentY > 80) {
            // Shift header to top of viewport when user scrolls past announce bar
            header.style.top = '0';
        } else {
            header.style.top = '36px';
        }

        lastY = currentY;
    }, { passive: true });
})();


// -------- ACTIVE NAV ON SCROLL --------
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();


// -------- ENQUIRY FORM --------
(function () {
    const form = document.getElementById('admissionForm');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value.trim();
        const btn = form.querySelector('.submit-btn');

        btn.textContent = '✓ Enquiry Submitted!';
        btn.style.background = '#2a7a3b';

        setTimeout(() => {
            form.reset();
            btn.textContent = 'Submit Enquiry';
            btn.style.background = '';
        }, 3000);
    });
})();


// -------- SMOOTH SCROLL for anchor links --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerH = document.getElementById('mainHeader').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
