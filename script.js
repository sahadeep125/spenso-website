// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
             icon.setAttribute('data-lucide', 'menu');
        } else {
             icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
}

// FAQ Accordion
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const iconContainer = button.querySelector('.icon-container');
    const icon = iconContainer.querySelector('i');
    
    // Toggle current item
    if (answer.classList.contains('max-h-0')) {
        // Open
        answer.classList.remove('max-h-0', 'opacity-0', 'mt-0');
        answer.classList.add('max-h-48', 'opacity-100', 'mt-2');
        
        // Update Icon style
        iconContainer.classList.remove('bg-gray-100', 'text-gray-600');
        iconContainer.classList.add('bg-gray-900', 'text-white');
        icon.setAttribute('data-lucide', 'minus');
    } else {
        // Close
        answer.classList.add('max-h-0', 'opacity-0', 'mt-0');
        answer.classList.remove('max-h-48', 'opacity-100', 'mt-2');

        // Update Icon style
        iconContainer.classList.add('bg-gray-100', 'text-gray-600');
        iconContainer.classList.remove('bg-gray-900', 'text-white');
        icon.setAttribute('data-lucide', 'plus');
    }
    lucide.createIcons();
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});