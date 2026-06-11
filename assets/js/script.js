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

document.addEventListener('DOMContentLoaded', () => {
    const forms = [
        { id: 'contactForm', successId: 'contactFormSuccess', errorId: 'contactFormError' },
        { id: 'donationForm', successId: 'donationFormSuccess', errorId: 'donationFormError' }
    ];

    const handleFormSubmit = async (form, successNode, errorNode) => {
        const submitButton = form.querySelector('button[type="submit"]');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const originalButtonText = submitButton?.textContent;
        if (submitButton) {
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        }

        successNode.classList.add('hidden');
        errorNode.classList.add('hidden');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.classList.add('hidden');
                successNode.classList.remove('hidden');
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            errorNode.classList.remove('hidden');
        } finally {
            if (submitButton) {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        }
    };

    forms.forEach(({ id, successId, errorId }) => {
        const form = document.getElementById(id);
        const successNode = document.getElementById(successId);
        const errorNode = document.getElementById(errorId);

        if (form && successNode && errorNode) {
            form.addEventListener('submit', event => {
                event.preventDefault();
                handleFormSubmit(form, successNode, errorNode);
            });
        }
    });
});
