document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-in-out';
    });

    window.addEventListener('scroll', () => {
        document.querySelectorAll('section').forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.style.opacity = '1';
            }
        });
    });
});

function initiateUPIPayment() {
    const upiId = '8474838991@fam';
    
    const upiLink = `upi://pay?pa=${upiId}&pn=JiviteshHazarika&tn=BuyMeACoffee&am=&cu=INR`;
    
    window.location.href = upiLink;
    
    setTimeout(() => {
        if (!document.hidden) {
            alert('No UPI app detected! Please install Google Pay, PhonePe, Paytm, or any UPI-enabled app.');
        }
    }, 1000);
}