document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    
    services.forEach(service => observer.observe(service));

    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const closeBtn = document.getElementById("close-btn");
    let currentIndex = 0;
    
    // Функция для обновления изображения в лайтбоксе
    function updateLightbox(index) {
        if (index >= 0 && index < galleryImages.length) {
            lightboxImg.src = galleryImages[index].src;
            currentIndex = index;
        }
    }
    
    // Открытие лайтбокса по клику на изображение
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            updateLightbox(index);
            lightbox.style.display = "flex";
        });
    });
    
    // Обработчики кнопок "Предыдущий" и "Следующий"
    prevBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Чтобы не закрывался лайтбокс
        updateLightbox(currentIndex - 1);
    });
    
    nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        updateLightbox(currentIndex + 1);
    });
    
    // Закрытие лайтбокса по клику вне изображения
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    })
});

document.getElementById("showMoreBtn").addEventListener("click", function() {
    const hiddenImages = document.querySelectorAll(".gallery-img.hidden");

    // Показываем максимум 4 фото за нажатие
    let count = 0;
    hiddenImages.forEach(img => {
        if (count < 4) { 
            img.classList.remove("hidden");
            count++;
        }
    });

    // Если больше нет скрытых фото — скрываем кнопку
    if (document.querySelectorAll(".gallery-img.hidden").length === 0) {
        this.style.display = "none";
    }
});

const avatars = document.querySelectorAll(".avatar");
avatars[0].style.backgroundColor = "#2a6b84";
avatars[1].style.backgroundColor = "#d62f2f";
avatars[2].style.backgroundColor = "#74c0fc";
avatars[3].style.backgroundColor = "#044944";
avatars[4].style.backgroundColor = "#8bc24a";
avatars[5].style.backgroundColor = "#254bdd";
avatars[6].style.backgroundColor = "#044944";
avatars[7].style.backgroundColor = "#ffce40";
avatars[8].style.backgroundColor = "#8dc63f";
avatars[9].style.backgroundColor = "#d62f2f";

const container = document.querySelector('.reviews');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        
next.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});
        
prev.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
});
