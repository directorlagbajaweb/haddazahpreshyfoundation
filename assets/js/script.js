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

// Donation Form Handler with Formspree
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(donationForm);
        const actionUrl = donationForm.getAttribute('action');

        try {
            const response = await fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you! Your donation request has been received. We will contact you shortly.');
                donationForm.reset();
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        } catch (error) {
            alert('Oops! There was a problem submitting your form.');
        }
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
