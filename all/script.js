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

// Theme Toggle with Local Storage
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Theme toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (htmlElement.classList.contains('dark')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    });
}

// Animate skill progress bars on scroll
const skillBars = document.querySelectorAll('.skill-progress-bar');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.percent || '0%';
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    bar.dataset.percent = bar.style.width;
    bar.style.width = '0%';
    skillObserver.observe(bar);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.home-section');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

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

// Mobile menu improvements
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.classList.remove('active');
    });
}

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
                overlay.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        }
    });
});

// Contact form with Telegram
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
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Please fill in all fields';
            formMessage.style.display = 'block';
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
            return;
        }
        
        // Disable button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        
        // Your Telegram bot token and chat ID
       // Bot tokenni o'rnating
const TELEGRAM_BOT_TOKEN = '7043945637:AAHdqTcvH1hC_dZx8rT5C_0zq'; // Sizning token
const TELEGRAM_CHAT_ID = '-1001234567890'; // Guruh ID si
        
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
            
            if (data.ok) {
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Message sent successfully!';
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}
