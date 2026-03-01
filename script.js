// Initialize Lucide Icons
lucide.createIcons();

// Initialize Premium Calendar
flatpickr("#flightDates", {
    mode: "range",
    dateFormat: "M j",
    minDate: "today",
    showMonths: 1
});

// Sticky Navbar Effect with Blur
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-navy/90', 'backdrop-blur-md', 'shadow-lg', 'border-white/10');
        navbar.classList.remove('py-6', 'border-transparent');
        navbar.classList.add('py-4');
    } else {
        navbar.classList.remove('bg-navy/90', 'backdrop-blur-md', 'shadow-lg', 'border-white/10', 'py-4');
        navbar.classList.add('py-6', 'border-transparent');
    }
});

// Tab Switching Logic
const tabFlightsBtn = document.getElementById('tabFlightsBtn');
const tabHotelsBtn = document.getElementById('tabHotelsBtn');
const flightTabContent = document.getElementById('flightTabContent');
const hotelTabContent = document.getElementById('hotelTabContent');

tabHotelsBtn.addEventListener('click', () => {
    tabHotelsBtn.classList.remove('text-gray-400', 'border-transparent');
    tabHotelsBtn.classList.add('text-gold', 'border-gold');
    tabFlightsBtn.classList.remove('text-gold', 'border-gold');
    tabFlightsBtn.classList.add('text-gray-400', 'border-transparent');
    
    flightTabContent.classList.add('hidden');
    hotelTabContent.classList.remove('hidden');
});

tabFlightsBtn.addEventListener('click', () => {
    tabFlightsBtn.classList.remove('text-gray-400', 'border-transparent');
    tabFlightsBtn.classList.add('text-gold', 'border-gold');
    tabHotelsBtn.classList.remove('text-gold', 'border-gold');
    tabHotelsBtn.classList.add('text-gray-400', 'border-transparent');
    
    hotelTabContent.classList.add('hidden');
    flightTabContent.classList.remove('hidden');
});

// Booking Widget Interactivity Simulation
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('searchBtn');
    const originalContent = btn.innerHTML;
    const resultsDiv = document.getElementById('searchResults');
    
    // Loading state
    btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mr-2"></i> SEARCHING...';
    btn.classList.add('opacity-80');
    lucide.createIcons();

    // Simulate API Call & DOM Update
    setTimeout(() => {
        // Restore button
        btn.innerHTML = originalContent;
        btn.classList.remove('opacity-80');
        
        // Show results with animation
        resultsDiv.classList.remove('hidden');
        
        // Trigger reflow to restart animation
        void resultsDiv.offsetWidth; 
        
        resultsDiv.querySelector('.flight-card').classList.add('flight-card-slide');
        
        // Scroll slightly to show results if on smaller screens
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    }, 1500);
});

// Modal Pop-up Logic
const modalData = {
    'contact': {
        title: 'Contact Us',
        content: `
            <p>We are dedicated to providing you with exceptional service around the clock. Please reach out to our dedicated concierge team for any inquiries.</p>
            <div class="mt-6 space-y-6">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0"><i data-lucide="phone" class="w-5 h-5 text-gold"></i></div>
                    <div><p class="text-offwhite font-medium text-lg">Global Reservations</p><p class="text-sm">+81 3-XXXX-XXXX (Available 24/7)</p></div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0"><i data-lucide="mail" class="w-5 h-5 text-gold"></i></div>
                    <div><p class="text-offwhite font-medium text-lg">Email Support</p><p class="text-sm">premium@shikokuair.com</p></div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0"><i data-lucide="map-pin" class="w-5 h-5 text-gold"></i></div>
                    <div><p class="text-offwhite font-medium text-lg">Headquarters</p><p class="text-sm">Shikoku Air Tower, Minato City, Tokyo, Japan</p></div>
                </div>
            </div>`
    },
    'faq': {
        title: 'Frequently Asked Questions',
        content: `
            <div class="space-y-6">
                <div>
                    <h4 class="text-offwhite font-medium mb-2">Can I change or cancel my premium booking?</h4>
                    <p class="text-sm">Yes, First and Business class tickets offer complimentary flexibility for date changes and cancellations up to 24 hours before departure.</p>
                </div>
                <div>
                    <h4 class="text-offwhite font-medium mb-2">What time should I arrive at the airport?</h4>
                    <p class="text-sm">We recommend arriving at least 2 hours before international departures to fully enjoy our Premium Lounge experiences.</p>
                </div>
                <div>
                    <h4 class="text-offwhite font-medium mb-2">How do I upgrade my flight?</h4>
                    <p class="text-sm">Upgrades can be managed through the "Manage Booking" portal or requested at our dedicated premium check-in counters.</p>
                </div>
            </div>`
    },
    'baggage': {
        title: 'Baggage Policy',
        content: `
            <p class="mb-6">Shikoku Air offers generous baggage allowances to ensure you travel with everything you need in utmost comfort.</p>
            <div class="space-y-4">
                <div class="border border-white/10 p-4 rounded-sm">
                    <h4 class="text-gold font-serif text-xl mb-2">First Class</h4>
                    <p class="text-sm"><span class="text-offwhite">Checked:</span> 3 pieces, up to 32kg (70lbs) each<br><span class="text-offwhite">Cabin:</span> 2 pieces, up to 10kg each</p>
                </div>
                <div class="border border-white/10 p-4 rounded-sm">
                    <h4 class="text-gold font-serif text-xl mb-2">Business Class</h4>
                    <p class="text-sm"><span class="text-offwhite">Checked:</span> 2 pieces, up to 32kg (70lbs) each<br><span class="text-offwhite">Cabin:</span> 2 pieces, up to 10kg each</p>
                </div>
                <div class="border border-white/10 p-4 rounded-sm">
                    <h4 class="text-gold font-serif text-xl mb-2">Economy Class</h4>
                    <p class="text-sm"><span class="text-offwhite">Checked:</span> 2 pieces, up to 23kg (50lbs) each<br><span class="text-offwhite">Cabin:</span> 1 piece, up to 7kg</p>
                </div>
            </div>`
    },
    'assistance': {
        title: 'Special Assistance',
        content: `
            <p class="mb-4">We are committed to making travel accessible and comfortable for all our guests. Please notify us at least 48 hours before your flight for specific arrangements.</p>
            <ul class="list-disc pl-5 space-y-2 text-sm">
                <li><strong class="text-offwhite">Mobility Assistance:</strong> Wheelchair services from check-in to boarding.</li>
                <li><strong class="text-offwhite">Dietary Requirements:</strong> Over 15 special meal options including Halal, Kosher, Vegan, and allergy-friendly meals.</li>
                <li><strong class="text-offwhite">Medical Accommodations:</strong> Support for traveling with medical equipment or service animals.</li>
                <li><strong class="text-offwhite">Expectant Mothers:</strong> Special care and priority boarding.</li>
            </ul>`
    },
    'terms': {
        title: 'Terms of Service',
        content: `
            <p class="text-sm mb-4">Welcome to Shikoku Air. By using our website and services, you agree to the following terms and conditions.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">1. Booking and Reservations</h4>
            <p class="text-sm mb-4">All bookings are subject to availability and our fare rules. Fares are only guaranteed once ticketing is complete.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">2. Modifications</h4>
            <p class="text-sm mb-4">Shikoku Air reserves the right to modify these terms. Continued use of our services constitutes acceptance of the new terms.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">3. User Conduct</h4>
            <p class="text-sm">Users must not misuse our booking systems or attempt to access restricted data. Fraudulent bookings will be canceled immediately.</p>`
    },
    'privacy': {
        title: 'Privacy Policy',
        content: `
            <p class="text-sm mb-4">Your privacy is of utmost importance to Shikoku Air. We handle your data with the highest level of security and in compliance with global standards.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">Data Collection</h4>
            <p class="text-sm mb-4">We collect necessary personal and passport information solely for the purpose of fulfilling your travel arrangements and meeting aviation security requirements.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">Data Protection</h4>
            <p class="text-sm">We utilize advanced encryption protocols to protect your payment details and personal data. We never sell your data to third parties.</p>`
    },
    'cookie': {
        title: 'Cookie Policy',
        content: `
            <p class="text-sm mb-4">Shikoku Air uses cookies to elevate your digital experience, ensuring our website functions seamlessly and offering personalized travel recommendations.</p>
            <ul class="list-disc pl-5 space-y-2 text-sm">
                <li><strong class="text-offwhite">Essential Cookies:</strong> Required for booking flights and secure log-in.</li>
                <li><strong class="text-offwhite">Performance Cookies:</strong> Help us understand how visitors interact with our website to improve usability.</li>
                <li><strong class="text-offwhite">Functional Cookies:</strong> Remember your preferences such as language and currency.</li>
            </ul>
            <p class="text-sm mt-4">You can manage your cookie preferences through your browser settings at any time.</p>`
    },
    'carriage': {
        title: 'Conditions of Carriage',
        content: `
            <p class="text-sm mb-4">These Conditions of Carriage outline the contract between you (the passenger) and Shikoku Air regarding your flight.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">Schedules and Delays</h4>
            <p class="text-sm mb-4">While we strive for precision scheduling, flight times are not guaranteed. In the event of delays, we will provide premium support and accommodations as per our passenger rights policy.</p>
            <h4 class="text-offwhite font-medium mt-4 mb-2">Right to Refuse Carriage</h4>
            <p class="text-sm">We reserve the right to refuse carriage for safety, security, or health reasons, or if passenger documentation is incomplete.</p>`
    }
};

const modal = document.getElementById('globalModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalPanel = document.getElementById('modalPanel');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');
const triggers = document.querySelectorAll('.modal-trigger');

function openModal(modalId) {
    const data = modalData[modalId];
    if (!data) return;

    // Set Content
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content;
    
    // Re-initialize Lucide icons for new dynamic content
    lucide.createIcons();

    // Show Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Trigger animations
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'scale-95');
        modalPanel.classList.add('opacity-100', 'scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    // Reverse animations
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'scale-100');
    modalPanel.classList.add('opacity-0', 'scale-95');

    // Hide after animation completes
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}

// Add Listeners
triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        openModal(modalId);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Fleet Slider Logic
const fleetSlider = document.getElementById('fleetSlider');
const fleetPrevBtn = document.getElementById('fleetPrevBtn');
const fleetNextBtn = document.getElementById('fleetNextBtn');

if(fleetPrevBtn && fleetNextBtn && fleetSlider) {
    fleetPrevBtn.addEventListener('click', () => {
        fleetSlider.scrollBy({ left: -400, behavior: 'smooth' });
    });
    fleetNextBtn.addEventListener('click', () => {
        fleetSlider.scrollBy({ left: 400, behavior: 'smooth' });
    });
}