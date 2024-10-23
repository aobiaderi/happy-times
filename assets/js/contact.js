// Create and append the heading
const contactUs = document.createElement('h1');
contactUs.id = 'contacts';
contactUs.classList.add('fade-in')
contactUs.textContent = 'Contact Us';
document.getElementById("contactContainer").appendChild(contactUs);

// Create and append the paragraph text
const contactP = document.createElement('p');
contactP.classList.add('contactsP', 'lead', 'text-break','pl-3','pr-3','explore','fade-in-delay');
contactP.textContent = 'Need to get in touch? We’d love to hear from you. Please fill in the contact form below and a member of our team will get back to you shortly.';
document.getElementById("contactContainer").appendChild(contactP);

// Create and append the form container
const formContainer = document.createElement('div');
formContainer.classList.add('container-contact', 'container', 'mt-5', 'p-5', 'rounded', 'shadow', 'fade-in-delay');

// Create the form element
const form = document.createElement('form');

// Create the error message div
const errorDiv = document.createElement('div');
errorDiv.id = 'errorMessages';
errorDiv.style.color = 'red';
errorDiv.style.marginBottom = '10px';
form.appendChild(errorDiv);

// Create the Name input group
const nameFormGroup = document.createElement('div');
nameFormGroup.classList.add('form-group', 'position-relative');

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'First Name';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.classList.add('form-control');
nameInput.id = 'name';
nameInput.placeholder = 'Enter your first name';

// Create the question mark span
const nameQuestionMark = document.createElement('span');
nameQuestionMark.classList.add('question-mark');
nameQuestionMark.textContent = '?';


// Append the name label and input to the name form group
nameFormGroup.appendChild(nameLabel);
nameFormGroup.appendChild(nameInput);
nameFormGroup.appendChild(nameQuestionMark);

// Create the Surname input group
const surnameFormGroup = document.createElement('div');
surnameFormGroup.classList.add('form-group', 'position-relative');

const surnameLabel = document.createElement('label');
surnameLabel.setAttribute('for', 'surname');
surnameLabel.textContent = 'Last Name';

const surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.classList.add('form-control');
surnameInput.id = 'surname';
surnameInput.placeholder = 'Enter your last name';

// Create the question mark span
const surnameQuestionMark = document.createElement('span');
surnameQuestionMark.classList.add('question-mark');
surnameQuestionMark.textContent = '?';

// Append the surname label and input to the surname form group
surnameFormGroup.appendChild(surnameLabel);
surnameFormGroup.appendChild(surnameInput);
surnameFormGroup.appendChild(surnameQuestionMark);

// Create the phone number input group
const phoneFormGroup = document.createElement('div');
phoneFormGroup.classList.add('form-group', 'position-relative');

const phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.textContent = 'Phone Number';

const phoneInput = document.createElement('input');
phoneInput.type = 'text';
phoneInput.classList.add('form-control');
phoneInput.id = 'phone';
phoneInput.placeholder = 'Enter your phone number e.g +441234567890';
phoneInput.name = 'phone';
// Pattern allows an optional + at the start, followed by at least 11 digits (12 digits if + is included)
phoneInput.pattern = '^(\\+?[0-9]{11,}|[0-9]{11,})$';


// Create the question mark span
const phoneQuestionMark = document.createElement('span');
phoneQuestionMark.classList.add('question-mark');
phoneQuestionMark.textContent = '?';


// Append the phone label and input to the phone form group
phoneFormGroup.appendChild(phoneLabel);
phoneFormGroup.appendChild(phoneInput);
phoneFormGroup.appendChild(phoneQuestionMark);

// Create the Email input group
const emailFormGroup = document.createElement('div');
emailFormGroup.classList.add('form-group', 'position-relative');

const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email address';

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.classList.add('form-control');
emailInput.id = 'email';
emailInput.placeholder = 'Enter your email';

// Create the question mark span
const emailQuestionMark = document.createElement('span');
emailQuestionMark.classList.add('question-mark');
emailQuestionMark.textContent = '?';

// Append the email label and input to the email form group
emailFormGroup.appendChild(emailLabel);
emailFormGroup.appendChild(emailInput);
emailFormGroup.appendChild(emailQuestionMark);

// Create the Message textarea group
const messageFormGroup = document.createElement('div');
messageFormGroup.classList.add('form-group');

const messageLabel = document.createElement('label');
messageLabel.setAttribute('for', 'message');
messageLabel.textContent = 'Message';

const messageTextarea = document.createElement('textarea');
messageTextarea.classList.add('form-control');
messageTextarea.id = 'message';
messageTextarea.rows = 5;
messageTextarea.placeholder = 'Enter your message';

// Append the message label and textarea to the message form group
messageFormGroup.appendChild(messageLabel);
messageFormGroup.appendChild(messageTextarea);

// Create the Submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.classList.add('btn', 'btn-primary');
submitButton.textContent = 'Submit';

// Append all form groups and the submit button to the form
form.appendChild(nameFormGroup);
form.appendChild(surnameFormGroup);
form.appendChild(emailFormGroup);
form.appendChild(phoneFormGroup);
form.appendChild(messageFormGroup);
form.appendChild(submitButton);

// Append the form container to the contact container in the document
formContainer.appendChild(form);
document.getElementById('contactContainer').appendChild(formContainer);


// Validation functions
function validateFirstName() {
    const firstName = nameInput.value.trim();
    const errorMessage = 'First name cannot be empty and must only contain alphabetic characters.';
    if (firstName === '' || /[^a-zA-Z\s]/.test(firstName)) {
        nameQuestionMark.style.display = 'inline';
        showError(errorMessage);
    } else {
        nameQuestionMark.style.display = 'none';
        hideError(errorMessage);
    }
}


function validateLastName() {
    const lastName = surnameInput.value.trim();
    if (lastName === '' || /[^a-zA-Z\s]/.test(lastName)) {
        surnameQuestionMark.style.display = 'inline';
        showError('Last name cannot be empty and must only contain alphabetic characters.');
    } else {
        surnameQuestionMark.style.display = 'none';
        hideError('Last name cannot be empty and must only contain alphabetic characters.');
    }
}
function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (!emailPattern.test(email)) {
        emailInput.setCustomValidity(''); // Clear the default message
        emailQuestionMark.style.display = 'inline';
        showError('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
        emailQuestionMark.style.display = 'none';
        hideError('Please enter a valid email address.');
    }
}


// Function to validate the phone number
function validatePhone() {
    const phone = phoneInput.value.trim();
    // Pattern allows an optional + at the start, followed by at least 11 digits (12 digits if + is included)
    const phonePattern = /^(?:\+?[0-9]{12,}|[0-9]{11,})$/;
    if (!phonePattern.test(phone)) {
        phoneQuestionMark.style.display = 'inline';
        showError('Please enter a valid phone number with at least 11 digits. If using an international format, start with + and have at least 12 digits.');
    } else {
        phoneQuestionMark.style.display = 'none';
        hideError('Please enter a valid phone number with at least 11 digits. If using an international format, start with + and have at least 12 digits.');
    }
}


// Function to show error messages
function showError(message) {
    if (!errorDiv.textContent.includes(message)) {
        const error = document.createElement('p');
        error.textContent = message;
        error.id = message; // Using message as the id to uniquely identify errors
        errorDiv.appendChild(error);
    }
}
// Function to hide error messages for a specific message
function hideError(message) {
    const error = document.getElementById(message);
    if (error) {
        error.remove();
    }
}

function validateMessage() {
    const message = messageTextarea.value.trim();
    const minLength = 10;
    const maxLength = 3000;
    if (message.length < minLength || message.length > maxLength) {
        showError(`Message must be between ${minLength} and ${maxLength} characters.`);
    } else {
        hideError(`Message must be between ${minLength} and ${maxLength} characters.`);
    }
}
// Add real-time validation event listeners
nameInput.addEventListener('input', validateFirstName);
surnameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
messageTextarea.addEventListener('input', validateMessage);

// Add a listener for when the form is submitted 
form.addEventListener('submit', (event) => {
    // Stop the form from submitting the usual way
    event.preventDefault();
    
     // Clear previous error messages
     hideError();

    // Validate all fields again before submission
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateMessage();

    // Check for invalid fields and display custom messages
    const fields = [nameInput, surnameInput, emailInput, phoneInput];
    let valid = true;

    fields.forEach(field => {
        if (!field.validity.valid) {
            valid = false;
            const error = document.createElement('p');
            error.textContent = field.validationMessage;
            errorDiv.appendChild(error);
        }
    });

    // If all validations pass
    if (valid) {
        // Get the values from the form fields
        const firstName = nameInput.value.trim();
        const lastName = surnameInput.value.trim();

        // Update the modal body with the user's name and surname
        const confirmationMessage = document.getElementById('modal-body1');
        confirmationMessage.textContent = `Your message has been sent successfully, ${firstName} ${lastName}. We will get back to you shortly.`;
        
        // Show the confirmation modal (pop-up)
        $('#confirmationModal').modal('show');
        
        // Clear the form fields
        form.reset();
    }
});
