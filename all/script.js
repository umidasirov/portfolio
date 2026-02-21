// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeSidebar');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    menuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll('.sidebar .nav-bar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navigation a');

function setActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink(); // Set initial active link

// Language switcher functionality
const engLang = document.querySelectorAll('.eng');
const ruLang = document.querySelectorAll('.ru');

function setLanguage(lang) {
    if (lang === 'eng') {
        document.querySelectorAll('.eng').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.ru').forEach(el => el.classList.remove('active'));
        // Here you can add translation logic
        console.log('English language selected');
    } else {
        document.querySelectorAll('.ru').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.eng').forEach(el => el.classList.remove('active'));
        // Here you can add translation logic
        console.log('Russian language selected');
    }
}

engLang.forEach(el => {
    el.addEventListener('click', () => setLanguage('eng'));
});

ruLang.forEach(el => {
    el.addEventListener('click', () => setLanguage('ru'));
});

// Contact form submission to Telegram
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = '8514142968:AAEj82ZobPep9_CVKG3jFrPfgWGZGvUSt2g'; // Replace with your bot token
const TELEGRAM_CHAT_ID = '8003183441'; // Replace with your chat ID

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
    
    // Format message for Telegram
    const telegramMessage = `
📬 New message from portfolio website:

👤 Name: ${name}
💬 Message: ${message}
    `;
    
    try {
        // Send to Telegram
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Message sent successfully! I will reply soon.';
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        // Show error message
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Failed to send message. Please try again or contact me via Telegram.';
        console.error('Error:', error);
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send message</span> <i class="fa-solid fa-paper-plane"></i>';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.skill-card, .portfolio-item, .about-content p').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Typing effect for name (optional)
const nameElement = document.querySelector('.name');
if (nameElement) {
    const text = nameElement.textContent;
    nameElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', typeWriter);
}
