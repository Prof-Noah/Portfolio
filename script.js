// Lightbox functionality
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
const screenshotImages = document.querySelectorAll('.screenshot-img img');
const certificateImages = document.querySelectorAll('.certificate-img img');

// Add click event to screenshot images
screenshotImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    });
});

// Add click event to certificate images
certificateImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close lightbox when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});
