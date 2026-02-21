 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  gtag('js', new Date());
  gtag('config', 'G-W02BT0SXBS');

// AOS Animation initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
// Loading Screen
// AOS Animation initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 500);
    }
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
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeSidebar');

if (menuBtn && mobileMenu) {
    const menuIcon = menuBtn.querySelector('i');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        }
    });
}

// Sidebar functionality
if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
}

if (closeBtn && sidebar && overlay) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        if (menuBtn) menuBtn.classList.remove('active');
    });
}

if (overlay && sidebar && menuBtn) {
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.classList.remove('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a, .sidebar .nav-bar a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (menuBtn) {
            menuBtn.classList.remove('active');
            const menuIcon = menuBtn.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            }
        }
    });
});

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add('dark');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-sun';
    }
} else {
    htmlElement.classList.remove('dark');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-moon';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    });
}

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

// Animate skill progress bars on scroll
const skillBars = document.querySelectorAll('.skill-progress-bar');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percent = entry.target.getAttribute('data-percent') || '0%';
            entry.target.style.width = percent;
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.setAttribute('data-percent', width);
    bar.style.width = '0%';
    skillObserver.observe(bar);
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-card');

if (filterBtns.length > 0 && portfolioItems.length > 0) {
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
}

// Smooth reveal animations
const revealElements = document.querySelectorAll('.skill-category, .portfolio-card, .about-content p');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.home-section');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                if (menuBtn) menuBtn.classList.remove('active');
            }
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (menuBtn) {
                    const menuIcon = menuBtn.querySelector('i');
                    if (menuIcon) {
                        menuIcon.classList.add('fa-bars');
                        menuIcon.classList.remove('fa-times');
                    }
                }
            }
        }
    });
});

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = '7043945637:AAHdqTcvH1hC_dZx8rT5C_0zq'; // Replace with your bot token
const TELEGRAM_CHAT_ID = '-1001234567890'; // Replace with your chat ID

// Contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const submitBtn = document.getElementById('submitBtn');
        const formMessage = document.getElementById('formMessage');
        
        // Validate
        if (!name.trim() || !message.trim()) {
            if (formMessage) {
                formMessage.className = 'form-message error';
                formMessage.textContent = currentLang === 'en' ? 'Please fill in all fields' : 'Заполните все поля';
                formMessage.style.display = 'block';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 3000);
            }
            return;
        }
        
        // Disable button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'en' ? 
                '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>' : 
                '<span>Отправка...</span> <i class="fas fa-spinner fa-spin"></i>';
        }
        
        const telegramMessage = `
📬 **New Message from Portfolio**

👤 **Name:** ${name}
💬 **Message:** ${message}

---
Sent from: ${window.location.href}
Time: ${new Date().toLocaleString()}
        `;
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramMessage,
                    parse_mode: 'Markdown'
                })
            });
            
            const data = await response.json();
            
            if (formMessage) {
                if (data.ok) {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = currentLang === 'en' ? 
                        'Message sent successfully!' : 
                        'Сообщение отправлено!';
                    formMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send');
                }
            }
        } catch (error) {
            if (formMessage) {
                formMessage.className = 'form-message error';
                formMessage.textContent = currentLang === 'en' ? 
                    'Failed to send message. Please try again.' : 
                    'Ошибка. Попробуйте снова.';
                formMessage.style.display = 'block';
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = currentLang === 'en' ? 
                    '<span>Send Message</span> <i class="fas fa-paper-plane"></i>' : 
                    '<span>Отправить</span> <i class="fas fa-paper-plane"></i>';
            }
            
            if (formMessage) {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (menuBtn) {
            menuBtn.classList.remove('active');
            const menuIcon = menuBtn.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            }
        }
    }
});
