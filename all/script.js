// Получаем элементы
const menuBtn = document.querySelector('.button-media');
const sidebar = document.getElementById('sidebar');

// Создаем фон для Sidebar
const sidebarOverlay = document.createElement('div'); // Создаем фон
sidebarOverlay.classList.add('sidebar-overlay');
document.body.appendChild(sidebarOverlay); // Добавляем фон в DOM

// Обработка клика на кнопку (открытие Sidebar)
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Переключаем класс "active" у Sidebar
    // Показываем/скрываем фон
    sidebarOverlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
});

// Обработка клика на фон для закрытия Sidebar
sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Закрываем Sidebar
    sidebarOverlay.style.display = 'none'; // Скрываем фон
});

// Добавляем обработчик для скрытия Sidebar при клике на ссылку
const navItems = document.querySelectorAll('#sidebar a'); // Получаем все ссылки в Sidebar

navItems.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active'); // Закрываем Sidebar
        sidebarOverlay.style.display = 'none'; // Скрываем фон
    });
});
