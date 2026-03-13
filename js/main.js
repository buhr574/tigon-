/* =====================================================
   TIGON - MAIN JAVASCRIPT
   - i18n: TR / EN dil desteği
   - Navbar scroll
   - Hamburger menu
   - Scroll reveal & counter animations
===================================================== */

/* ===================================================
   TRANSLATIONS (TR / EN)
=================================================== */
const translations = {
    tr: {
        /* Navbar */
        'nav.about': 'Hakkımızda',
        'nav.services': 'Hizmetler',
        'nav.projects': 'Projeler',
        'nav.products': 'Ürünler',
        'nav.career': 'Kariyer',
        'nav.contact': 'İletişim',

        /* Hero */
        'hero.title': '<span style="white-space: nowrap;">Geleceği birlikte <span class="hero__accent hero__accent--arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline><polyline points="8 5 15 12 8 19"></polyline></svg></span></span><br><span style="white-space: nowrap;">yaratalım <span class="hero__accent hero__accent--diamond"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 12 12 22 2 12"></polygon><line x1="2" y1="12" x2="22" y2="12"></line></svg></span></span>',
        'hero.desc': 'Dijital dünyada büyümek isteyen markalara web platformlarından mobil uygulamalara kadar uçtan uca çözümler sunuyoruz.',
        'hero.seeWork': 'Çalışmalarımız <span>&#8599;</span>',
        'hero.stat1': 'Proje',
        'hero.stat2': 'Müşteri',
        'hero.stat3': 'Yıl Deneyim',

        /* Brands */
        'brands.label': '100\'den fazla önde gelen marka tarafından tercih edilmekteyiz.',

        /* Services */
        'services.title': 'Ne sunuyoruz?',
        'services.desc': 'İşletmenizin ihtiyaçlarına göre özelleştirilmiş uçtan uca dijital çözümler sunuyor; yaratıcılığı en son teknolojiyle bir araya getiriyoruz.',
        'services.s1.title': 'Web Geliştirme',
        'services.s1.desc': 'En güncel teknolojilerle geliştirilen modern, hızlı ve ölçeklenebilir web uygulamaları. Kurumsal sitelerden karmaşık platformlara kadar.',
        'services.s2.title': 'Mobil Uygulama',
        'services.s2.desc': 'Olağanüstü kullanıcı deneyimleri sunan ve etkileşimi artıran native ve cross-platform iOS & Android uygulamaları.',
        'services.s3.title': 'Özel Yazılım Projesi',
        'services.s3.desc': 'İşletmenizin benzersiz süreçlerine ve gereksinimlerine göre tasarlanmış özel yazılım çözümleri.',
        'services.s4.title': 'UI / UX Tasarım',
        'services.s4.desc': 'Estetik güzelliği sezgisel işlevsellikle birleştirerek unutulmaz dijital deneyimler yaratan kullanıcı odaklı tasarım.',
        'services.more': 'Daha fazla ↗',

        /* TCI */
        'tci.desc': 'Yazılım geliştirmede iteratif bir yaklaşıma inanıyoruz. Her proje derin bir düşünceyle başlar, ardından temiz bir uygulama ve sürekli iyileştirmeyle mükemmelliğe ulaşır.',
        'tci.f1': 'Hızlı teslimat için Agile metodoloji',
        'tci.f2': 'İşletmenizle birlikte ölçeklenen kod kalitesi',
        'tci.f3': 'Yayın sonrası destek & optimizasyon',

        /* Projects */
        'projects.tag': 'Portföy',
        'projects.title': 'Son Çalışmalarımız',
        'projects.desc': 'Gerçek işletmeler için gerçek sonuçlar üreten seçilmiş projelerimizden bir kesit.',
        'projects.all': 'Tüm Projeleri Gör',
        'projects.p1.tag': 'Web Platform',
        'projects.p1.title': 'E-Ticaret Çözümü',
        'projects.p1.desc': 'Gerçek zamanlı stok yönetimiyle tam kapsamlı e-ticaret platformu',
        'projects.p2.tag': 'Mobil Uygulama',
        'projects.p2.title': 'Fitness Takip',
        'projects.p2.desc': 'Cross-platform sağlık & fitness uygulaması',
        'projects.p3.title': 'Analitik Paneli',
        'projects.p3.desc': 'Gerçek zamanlı iş zekâsı platformu',

        /* CTA */
        'cta.title': 'Birlikte Yaratalım',
        'cta.desc': 'Vizyonunuzu gerçeğe dönüştürmeye hazır mısınız? Harika bir şeyler inşa edelim.',

        /* Footer */
        'footer.tagline': 'Dijital geleceği inşa ediyoruz, bir proje bir seferde.',
        'footer.company': 'Şirket',
        'footer.blog': 'Blog',
        'footer.city': 'İstanbul, Türkiye',
        'footer.copy': '© 2026 Tigon. Tüm hakları saklıdır.',
        'footer.privacy': 'Gizlilik Politikası',
        'footer.terms': 'Kullanım Koşulları',
    },

    en: {
        /* Navbar */
        'nav.about': 'About us',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.products': 'Products',
        'nav.career': 'Career',
        'nav.contact': 'Contact Us',

        /* Hero */
        'hero.title': '<span style="white-space: nowrap;">Let\'s create the <span class="hero__accent hero__accent--arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline><polyline points="8 5 15 12 8 19"></polyline></svg></span></span><br><span style="white-space: nowrap;">future <span class="hero__accent hero__accent--diamond"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 12 12 22 2 12"></polygon><line x1="2" y1="12" x2="22" y2="12"></line></svg></span> together</span>',
        'hero.desc': 'We build cutting-edge digital experiences — from web platforms to mobile apps — helping brands grow in the digital world.',
        'hero.seeWork': 'See our work <span>&#8599;</span>',
        'hero.stat1': 'Projects',
        'hero.stat2': 'Clients',
        'hero.stat3': 'Years',

        /* Brands */
        'brands.label': 'Trusted globally by 100+ leading brands.',

        /* Services */
        'services.title': 'What do we offer?',
        'services.desc': 'We provide end-to-end digital solutions tailored to your business needs, combining creativity with cutting-edge technology.',
        'services.s1.title': 'Web Development',
        'services.s1.desc': 'Modern, fast and scalable web applications built with the latest technologies. From corporate sites to complex platforms.',
        'services.s2.title': 'Mobile App',
        'services.s2.desc': 'Native and cross-platform iOS & Android apps that deliver exceptional user experiences and drive engagement.',
        'services.s3.title': 'Custom Software Project',
        'services.s3.desc': 'Bespoke software solutions designed around your unique business processes and requirements.',
        'services.s4.title': 'UI / UX Design',
        'services.s4.desc': 'User-centered design that combines aesthetic beauty with intuitive functionality to create memorable digital experiences.',
        'services.more': 'Learn more ↗',

        /* TCI */
        'tci.desc': 'We believe in an iterative approach to software development. Every project starts with deep thinking, followed by clean implementation, and continuous improvement to deliver excellence.',
        'tci.f1': 'Agile methodology for rapid delivery',
        'tci.f2': 'Code quality that scales with your business',
        'tci.f3': 'Post-launch support & optimization',

        /* Projects */
        'projects.tag': 'Portfolio',
        'projects.title': 'Our Recent Work',
        'projects.desc': 'A selection of projects we\'re proud of — delivering real results for real businesses.',
        'projects.all': 'View All Projects',
        'projects.p1.tag': 'Web Platform',
        'projects.p1.title': 'E-Commerce Solution',
        'projects.p1.desc': 'Full-stack e-commerce platform with real-time inventory management',
        'projects.p2.tag': 'Mobile App',
        'projects.p2.title': 'Fitness Tracker',
        'projects.p2.desc': 'Cross-platform health & fitness app',
        'projects.p3.title': 'Analytics Dashboard',
        'projects.p3.desc': 'Real-time business intelligence platform',

        /* CTA */
        'cta.title': 'Let\'s Create Together',
        'cta.desc': 'Ready to turn your vision into reality? Let\'s build something amazing.',

        /* Footer */
        'footer.tagline': 'Building digital futures, one project at a time.',
        'footer.company': 'Company',
        'footer.blog': 'Blog',
        'footer.city': 'İzmir, Turkey',
        'footer.copy': '© 2026 Tigon. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
    }
};

/* ===================================================
   i18n ENGINE
=================================================== */
let currentLang = localStorage.getItem('tigon-lang') || 'tr';

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            // Allow HTML (for <br>, <span> etc.)
            el.innerHTML = t[key];
        }
    });

    // Update <html lang> attr
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

    // Update <title>
    document.title = lang === 'tr'
        ? 'Tigon Project | Geleceği Birlikte Yaratalım'
        : 'Tigon Project | Let\'s Create the Future Together';

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem('tigon-lang', lang);
}

/* ===================================================
   DOM READY
=================================================== */
document.addEventListener('DOMContentLoaded', function () {

    // ——— LANGUAGE TOGGLE ———
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.dataset.lang;
            if (lang !== currentLang) {
                applyTranslations(lang);
            }
        });
    });

    // Apply saved language on load
    applyTranslations(currentLang);

    // ——— NAVBAR SCROLL ———
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ——— HAMBURGER MENU ———
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ——— SCROLL REVEAL ———
    document.querySelectorAll('.service-card, .project-card, .tci__content, .tci__image-side, .section-header').forEach(el => {
        el.classList.add('reveal');
    });

    document.querySelectorAll('.service-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
    });

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ——— ACTIVE NAV LINK ———
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function updateActiveNav() {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const top = section.offsetTop - 110;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === '#' + id;
                    link.style.color = isActive ? 'var(--primary)' : '';
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ——— SMOOTH SCROLL ———
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // ——— SERVICE CARD TILT ———
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 22;
            const rotateY = (rect.width / 2 - x) / 22;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // ——— COUNTER ANIMATION ———
    function animateCounter(el, target, duration = 1200) {
        const suffix = el.textContent.replace(/[0-9]/g, '');
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { start = target; clearInterval(timer); }
            el.textContent = Math.floor(start) + suffix;
        }, 16);
    }

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const num = parseInt(el.textContent);
                const sfx = el.textContent.replace(/[0-9]/g, '');
                el.textContent = '0' + sfx;
                setTimeout(() => animateCounter(el, num), 200);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat__num').forEach(el => counterObserver.observe(el));

    // ——— HERO PARALLAX ———
    const heroPhone = document.getElementById('heroPhone');
    if (heroPhone && window.innerWidth > 1024) {
        document.addEventListener('mousemove', function (e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            heroPhone.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // ——— TCI VIDEO CONTROLS ———
    const tciVideo = document.querySelector('.tci__video');
    const tciExpandBtn = document.querySelector('.tci__expand-btn');

    if (tciVideo && tciExpandBtn) {
        // Toggle play/pause on click
        tciVideo.addEventListener('click', function () {
            if (tciVideo.paused) {
                tciVideo.play();
            } else {
                tciVideo.pause();
            }
        });

        // Fullscreen toggle
        tciExpandBtn.addEventListener('click', function () {
            if (tciVideo.requestFullscreen) {
                tciVideo.requestFullscreen();
            } else if (tciVideo.webkitRequestFullscreen) { /* Safari */
                tciVideo.webkitRequestFullscreen();
            } else if (tciVideo.msRequestFullscreen) { /* IE11 */
                tciVideo.msRequestFullscreen();
            }
        });
    }

    console.log('Tigon — JS Loaded ✓ | Lang:', currentLang);
});
