// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close menu when a link is clicked
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.fullName || !data.email || !data.subject || !data.message) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // In a real application, you would send this data to a server
        console.log('Contact Form Data:', data);

        alert(`Thank you for your message, ${data.fullName}! We'll get back to you soon at ${data.email}`);
        contactForm.reset();
    });
}

// Donation Form Handler
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(donationForm);
        const data = Object.fromEntries(formData);

        // Validation
        if (!data.donorName || !data.email || !data.phone || !data.amount) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Amount validation
        if (isNaN(data.amount) || data.amount < 1000) {
            alert('Please enter a valid donation amount (minimum ₦1,000)');
            return;
        }

        // Format amount with currency
        const formattedAmount = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(data.amount);

        console.log('Donation Data:', data);

        alert(`Thank you, ${data.donorName}! Your donation of ${formattedAmount} is important to us. Please send proof of your bank transfer to donate@haddazahpreshy.org`);
        donationForm.reset();
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// Console message
console.log('%cHaddazah Preshy Health Foundation', 'color: #ec4899; font-size: 20px; font-weight: bold;');
console.log('%cEmpowering Women, Transforming Communities', 'color: #ec4899; font-size: 14px;');
