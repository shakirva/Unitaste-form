// Microsoft Forms URL for dealer registration
const MICROSOFT_FORMS_URL = 'https://forms.office.com/r/gVT3EKcCJK';

// EmailJS Configuration - Working Settings (keeping for backup)
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'BlrAV0JxNBOHc8CWp', // Your working EmailJS public key
    SERVICE_ID: 'service_7z18alz', // Your actual service ID
    TEMPLATE_ID: 'template_wglz6wc', // Your actual template ID from console
    TO_EMAIL: 'shakirshaki245@gmail.com', // Confirmed working email
    CC_EMAIL: 'renjithpm@unitaste.in' // Primary recipient
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
})();

// Redirect function for service cards
function redirectTo(url) {
    // Add a small delay for better UX
    const card = event.currentTarget;
    card.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

// Add click animation to service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form handling
    const form = document.getElementById('shopForm');
    const successMessage = document.getElementById('successMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (form) {
        console.log('Form found, adding event listener');
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted, preventing default');
            
            // Show loading spinner
            loadingSpinner.style.display = 'block';
            form.style.display = 'none';
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form data:', data);
            
            try {
                console.log('Attempting to send email...');
                // Send email using EmailJS
                await sendEmailWithEmailJS(data);
                
                console.log('Email sent successfully!');
                // Hide loading spinner and show success message
                loadingSpinner.style.display = 'none';
                successMessage.style.display = 'block';
                
            } catch (error) {
                console.error('Error sending email:', error);
                alert('There was an error submitting your registration. Please try again. Error: ' + error.message);
                
                // Hide loading spinner and show form again
                loadingSpinner.style.display = 'none';
                form.style.display = 'grid';
            }
        });
    } else {
        console.log('Form not found!');
    }

    async function sendEmailWithEmailJS(data) {
        try {
            console.log('EmailJS Config:', EMAIL_CONFIG);
            console.log('EmailJS object:', typeof emailjs !== 'undefined' ? 'Available' : 'NOT AVAILABLE');
            
            // Prepare template parameters to match your EmailJS template
            const templateParams = {
                from_name: data.shopName,
                to_name: 'Unitaste Team',
                phone: data.phoneNumber,
                message: `New Dealer Registration Details:

Shop Name: ${data.shopName}
Location: ${data.location}
Phone Number: ${data.phoneNumber}
District: ${data.district}
Card No: ${data.cardNo}
Distributor: ${data.distributor}

Submitted on: ${new Date().toLocaleString()}`
            };

            console.log('Template params:', templateParams);

            // Send email using your working EmailJS configuration
            const response = await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_ID,
                templateParams
            );

            console.log('Email sent successfully via EmailJS:', response);
            return response;
        } catch (error) {
            console.error('EmailJS error details:', error);
            throw error;
        }
    }

    // Add input validation and formatting
    const phoneInput = document.getElementById('phoneNumber');
    const cardInput = document.getElementById('cardNo');

    // Format phone number
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 10) {
            value = value.substring(0, 10);
        }
        e.target.value = value;
    });

    // Format card number
    cardInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });

    // Add form validation
    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidation);
    });

    function validateInput(e) {
        const input = e.target;
        const value = input.value.trim();
        
        if (!value) {
            showError(input, 'This field is required');
            return false;
        }

        // Specific validations
        switch (input.type) {
            case 'tel':
                if (!/^\d{10}$/.test(value)) {
                    showError(input, 'Please enter a valid 10-digit phone number');
                    return false;
                }
                break;
        }

        clearError(input);
        return true;
    }

    function showError(input, message) {
        clearError(input);
        input.style.borderColor = '#ef4444';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        input.style.borderColor = '#e5e7eb';
    }

    function clearValidation(e) {
        clearError(e.target);
    }
});