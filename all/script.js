// ===== 1. TRANSLATIONS =====
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'hero.surname': 'Ashirboyev',
        'hero.description': 'Frontend & Full Stack Developer from Tashkent. Creating beautiful and functional web experiences.',
        'hero.hireBtn': 'Hire Me',
        'about.title': 'About Me',
        'about.yearsExp': 'Years Experience',
        'about.projects': 'Projects',
        'about.clients': 'Happy Clients',
        'about.desc1': "Hi, I'm Umidjon - Frontend & Full Stack Developer from Tashkent. I'm passionate about creating beautiful and functional web applications.",
        'about.desc2': 'Currently studying Artificial Intelligence at TUIT and working with modern technologies like React, Vue.js, Python, and Django.',
        'about.desc3': "I'm ready to work on excellent projects with wonderful people and turn ideas into reality.",
        'skills.title': 'My Skills',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools',
        'portfolio.title': 'My Portfolio',
        'portfolio.all': 'All',
        'portfolio.frontend': 'Frontend',
        'portfolio.fullstack': 'Full Stack',
        'portfolio.django': 'Django',
        'portfolio.viewProject': 'View Project',
        'contact.title': 'Get In Touch',
        'contact.subtitle': "Let's talk about your project",
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.address': 'Tashkent, Uzbekistan',
        'contact.namePlaceholder': 'Your Name',
        'contact.messagePlaceholder': 'Your Message',
        'contact.sendBtn': 'Send Message',
        'footer.copyright': '© 2026 All rights reserved',
        'msg.success': 'Sent successfully!',
        'msg.error': 'Error. Try again.'
    },
    ru: {
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.portfolio': 'Портфолио',
        'nav.contact': 'Контакты',
        'hero.surname': 'Аширбоев',
        'hero.description': 'Frontend и Full Stack разработчик из Ташкента. Создаю красивые и функциональные веб-приложения.',
        'hero.hireBtn': 'Связвться со мной',
        'about.title': 'Обо мне',
        'about.yearsExp': 'Лет опыта',
        'about.projects': 'Проектов',
        'about.clients': 'Довольных клиентов',
        'about.desc1': 'Привет, я Умиджон - Frontend и Full Stack разработчик из Ташкента. Я увлечен созданием красивых и функциональных веб-приложений.',
        'about.desc2': 'В настоящее время изучаю искусственный интеллект в ТУИТ и работаю с современными технологиями, такими как React, Vue.js, Python и Django.',
        'about.desc3': 'Я готов работать над отличными проектами с замечательными людьми и воплощать идеи в реальность.',
        'skills.title': 'Мои навыки',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Инструменты',
        'portfolio.title': 'Портфолио',
        'portfolio.all': 'Все',
        'portfolio.frontend': 'Frontend',
        'portfolio.fullstack': 'Full Stack',
        'portfolio.django': 'Django',
        'portfolio.viewProject': 'Посмотреть проект',
        'contact.title': 'Связаться',
        'contact.subtitle': 'Давайте обсудим ваш проект',
        'contact.phone': 'Телефон',
        'contact.email': 'Почта',
        'contact.location': 'Локация',
        'contact.address': 'Ташкент, Узбекистан',
        'contact.namePlaceholder': 'Ваше имя',
        'contact.messagePlaceholder': 'Ваше сообщение',
        'contact.sendBtn': 'Отправить',
        'footer.copyright': '© 2026 Все права защищены',
        'msg.success': 'Успешно отправлено!',
        'msg.error': 'Ошибка. Попробуйте еще раз.'
    }
};

// ===== 2. LANGUAGE & THEME =====
let currentLang = localStorage.getItem('lang') || 'en';
const htmlElement = document.documentElement;

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update all text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update active language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize language
setLanguage(currentLang);

// Language button listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// ===== 3. THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// ===== 4. LOADING SCREEN =====
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    setTimeout(() => {
        loading.style.display = 'none';
    }, 500);
});

// ===== 5. AOS INIT =====
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===== 6. TYPED.JS =====
const typed = new Typed('.typed-text', {
    strings: [
        'Frontend Developer',
        'Full Stack Developer',
        'Django Developer',
        'React Developer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// ===== 7. MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ===== 8. ACTIVE NAVIGATION =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

function setActiveNav() {
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-nav') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);
setActiveNav();

// ===== 9. PHONE MASK =====
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        if (!x[1]) { 
            e.target.value = '+998'; 
            return; 
        }
        e.target.value = !x[2] ? '+998' : '+998 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });
}

// ===== 10. TELEGRAM BOT =====
// ===== 10. TELEGRAM BOT (CORS PROXY bilan) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const formMsg = document.getElementById('formMessage');
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validate
        if (!name.trim() || !phone.trim() || !message.trim()) {
            formMsg.textContent = translations[currentLang]['msg.error'];
            formMsg.className = 'form-message error';
            formMsg.style.display = 'block';
            setTimeout(() => formMsg.style.display = 'none', 3000);
            return;
        }
        
        // Telegram message
        const text = `🚀 **Yangi xabar!**\n\n👤 **Ism:** ${name}\n📞 **Telefon:** ${phone}\n💬 **Xabar:** ${message}`;
        
        // Disable button
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLang === 'en' ? 
            '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>' : 
            '<span>Отправка...</span> <i class="fas fa-spinner fa-spin"></i>';
        
        try {
            // CORS PROXY orqali yuborish
            const url = `https://corsproxy.io/?${encodeURIComponent('https://api.telegram.org/bot8514142968:AAEj82ZobPep9_CVKG3jFrPfgWGZGvUSt2g/sendMessage')}`;
            
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    chat_id: '-1003848661157', 
                    text: text, 
                    parse_mode: 'Markdown' 
                })
            });
            
            const data = await res.json();
            
            if (data.ok) {
                formMsg.textContent = translations[currentLang]['msg.success'];
                formMsg.className = 'form-message success';
                formMsg.style.display = 'block';
                this.reset();
                if (phoneInput) phoneInput.value = '';
            } else {
                throw new Error(data.description);
            }
        } catch (error) {
            console.error('Error:', error);
            formMsg.textContent = translations[currentLang]['msg.error'];
            formMsg.className = 'form-message error';
            formMsg.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>${translations[currentLang]['contact.sendBtn']}</span> <i class="fas fa-paper-plane"></i>`;
            
            setTimeout(() => {
                formMsg.style.display = 'none';
            }, 5000);
        }
    });
}   

// ===== 11. PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter cards
        const filter = btn.getAttribute('data-filter');
        portfolioCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== 12. SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 13. RESIZE HANDLER =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});