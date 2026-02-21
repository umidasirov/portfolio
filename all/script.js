// AOS Animation initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 500);
    }, 500);
});

// Typed.js Animation
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

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    });
});

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
});

// Language translations
const translations = {
    en: {
        'loading': 'Loading...',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'hero.name': 'Ashirboyev',
        'hero.description': 'Frontend & Full Stack Developer from Tashkent. Creating beautiful and functional web experiences.',
        'hero.hireBtn': 'Hire Me',
        'hero.workBtn': 'My Work',
        'about.title': 'About Me',
        'about.yearsExp': 'Years Experience',
        'about.projects': 'Projects',
        'about.clients': 'Happy Clients',
        'about.support': 'Support',
        'about.desc1': "Hi, I'm Umidjon - Frontend & Full Stack Developer from Tashkent. I'm passionate about creating beautiful and functional web applications.",
        'about.desc2': 'Currently studying Artificial Intelligence at TUIT and working with modern technologies like React, Vue.js, Python, and Django.',
        'about.desc3': "I'm ready to work on excellent projects with wonderful people and turn ideas into reality.",
        'skills.title': 'My Skills',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.tools': 'Tools & Others',
        'portfolio.title': 'My Portfolio',
        'portfolio.all': 'All',
        'portfolio.frontend': 'Frontend',
        'portfolio.fullstack': 'Full Stack',
        'portfolio.django': 'Django',
        'portfolio.viewProject': 'View Project',
        'contact.title': 'Get In Touch',
        'contact.info': "Let's talk about your project",
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.address': 'Tashkent, Uzbekistan',
        'contact.namePlaceholder': 'Your Name',
        'contact.messagePlaceholder': 'Your Message',
        'contact.sendBtn': 'Send Message',
        'footer.copyright': '© 2024 All rights reserved'
    },
    ru: {
        'loading': 'Загрузка...',
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.portfolio': 'Портфолио',
        'nav.contact': 'Контакты',
        'hero.name': 'Аширбоев',
        'hero.description': 'Frontend и Full Stack разработчик из Ташкента. Создаю красивые и функциональные веб-приложения.',
        'hero.hireBtn': 'Нанять меня',
        'hero.workBtn': 'Мои работы',
        'about.title': 'Обо мне',
        'about.yearsExp': 'Лет опыта',
        'about.projects': 'Проектов',
        'about.clients': 'Довольных клиентов',
        'about.support': 'Поддержка',
        'about.desc1': 'Привет, я Умиджон - Frontend и Full Stack разработчик из Ташкента. Я увлечен созданием красивых и функциональных веб-приложений.',
        'about.desc2': 'В настоящее время изучаю искусственный интеллект в ТУИТ и работаю с современными технологиями, такими как React, Vue.js, Python и Django.',
        'about.desc3': 'Я готов работать над отличными проектами с замечательными людьми и воплощать идеи в реальность.',
        'skills.title': 'Мои навыки',
        'skills.frontend': 'Frontend разработка',
        'skills.backend': 'Backend разработка',
        'skills.tools': 'Инструменты',
        'portfolio.title': 'Портфолио',
        'portfolio.all': 'Все',
        'portfolio.frontend': 'Frontend',
        'portfolio.fullstack': 'Full Stack',
        'portfolio.django': 'Django',
        'portfolio.viewProject': 'Посмотреть проект',
        'contact.title': 'Связаться',
        'contact.info': 'Давайте обсудим ваш проект',
        'contact.phone': 'Телефон',
        'contact.email': 'Почта',
        'contact.location': 'Локация',
        'contact.address': 'Ташкент, Узбекистан',
        'contact.namePlaceholder': 'Ваше имя',
        'contact.messagePlaceholder': 'Ваше сообщение',
        'contact.sendBtn': 'Отправить',
        'footer.copyright': '© 2024 Все права защищены'
    }
};

// Language switcher functionality
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active', 'bg-blue-600', 'text-white');
        }
    });
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Initialize language
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Set initial language
setLanguage(currentLang);

// Active navigation link on scroll
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
                if (link.dataset.nav === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);
setActiveNav();

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-blue-600', 'text-white');
            b.classList.add('bg-gray-200', 'dark:bg-gray-700');
        });
        btn.classList.add('active', 'bg-blue-600', 'text-white');
        btn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        
        // Filter items
        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = '8514142968:AAEj82ZobPep9_CVKG3jFrPfgWGZGvUSt2g'; // Replace with your bot token
const TELEGRAM_CHAT_ID = '-1003848661157'; // Replace with your chat ID

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // Disable button
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span>Sending...</span>
            <i class="fas fa-spinner fa-spin"></i>
        `;
        
        const telegramMessage = `
📬 New message from portfolio:

👤 Name: ${name}
💬 Message: ${message}
        `;
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramMessage
                })
            });
            
            const data = await response.json();
            
            formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
            
            if (data.ok) {
                formMessage.classList.add('bg-green-100', 'text-green-700');
                formMessage.textContent = currentLang === 'en' ? 'Message sent successfully!' : 'Сообщение отправлено!';
                contactForm.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            formMessage.classList.add('bg-red-100', 'text-red-700');
            formMessage.textContent = currentLang === 'en' ? 'Failed to send. Try again.' : 'Ошибка. Попробуйте снова.';
        }
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <span>${currentLang === 'en' ? 'Send Message' : 'Отправить'}</span>
            <i class="fas fa-paper-plane"></i>
        `;
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
}

// Smooth scroll for anchor links
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
