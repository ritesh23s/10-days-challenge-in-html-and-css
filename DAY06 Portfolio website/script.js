document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const connectBtn = document.getElementById('connectBtn');
const contactSection = document.getElementById('contact');

if (connectBtn && contactSection) {
    connectBtn.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}
