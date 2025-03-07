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

    // Galerie Lightbox
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });
    
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
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
