document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Set initial opacity to 0
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-in-out';
    });

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
});

// UPI Payment Function
function initiateUPIPayment() {
    const upiId = '8474838991@fam';
    const upiLink = `upi://pay?pa=${upiId}&pn=JiviteshHazarika&tn=BuyMeACoffee&am=&cu=INR`;

    // Open UPI app
    window.location.href = upiLink;

    // Check if UPI app opened successfully
    setTimeout(() => {
        if (!document.hidden) {
            const userConfirmed = confirm(
                'No UPI app detected! Would you like to copy the UPI ID instead?'
            );
            if (userConfirmed) {
                navigator.clipboard.writeText(upiId);
                alert('UPI ID copied to clipboard. Paste it in your UPI app.');
            }
        }
    }, 1500);
}
