const form = document.getElementById('contact-form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Reset error messages
    const errorFields = [fname, lname, email, phone];
    for (const field of errorFields) {
        const errorSpan = document.getElementById(`${field.id}-error`);
        errorSpan.textContent = '';
        field.classList.remove('error');
    }

    let isValid = true;

    // Check first name
    if (!fname.value || /\d/.test(fname.value)) {
        isValid = false;
        fname.classList.add('error');
        document.getElementById('fname-error').textContent = 'Please enter a valid first name.';
    }

    // Check last name
    if (!lname.value || /\d/.test(lname.value)) {
        isValid = false;
        lname.classList.add('error');
        document.getElementById('lname-error').textContent = 'Please enter a valid last name.';
    }

    // Check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
        isValid = false;
        email.classList.add('error');
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }

    // Check phone
    const phonePattern = /^\d{10}$/;
    if (!phone.value || !phonePattern.test(phone.value)) {
        isValid = false;
        phone.classList.add('error');
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number.';
    }

    if (isValid) {
        // Form is valid, show SweetAlert message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Form submitted successfully.',
        }).then(() => {
            // Reload the page after the user clicks "OK"
            location.reload();
        });
    }
});


// Tribikram KC
// Student ID - 8896357