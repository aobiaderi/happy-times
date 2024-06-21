// Create and append the heading
const contactUs = document.createElement('h1');
contactUs.id = 'contacts';
contactUs.textContent = 'Contact Us';
document.getElementById("contactContainer").appendChild(contactUs);

// Create and append the paragraph text
const contactP = document.createElement('p');
contactP.classList.add('contactsP','lead');
contactP.textContent = 'Need to get in touch? We’d love to hear from you. Please fill in the contact form below and a member of our team will get back to you shortly.';
document.getElementById("contactContainer").appendChild(contactP);


// Create and append the form container
const formContainer = document.createElement('div');
formContainer.classList.add('container-contact', 'container', 'mt-5', 'p-5',  'rounded', 'shadow');

// Create the form element
const form = document.createElement('form');

// Create the Name input group
const nameFormGroup = document.createElement('div');
nameFormGroup.classList.add('form-group');

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'First Name';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.classList.add('form-control');
nameInput.id = 'name';
nameInput.placeholder = 'Enter your first name';

// Append the name label and input to the name form group
nameFormGroup.appendChild(nameLabel);
nameFormGroup.appendChild(nameInput);


// Create the Surname input group
const surnameFormGroup = document.createElement('div');
surnameFormGroup.classList.add('form-group');

const surnameLabel = document.createElement('label');
surnameLabel.setAttribute('for', 'name');
surnameLabel.textContent = 'Last Name';

const surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.classList.add('form-control');
surnameInput.id = 'surname';
surnameInput.placeholder = 'Enter your last name';

// Append the surname label and input to the name form group
surnameFormGroup.appendChild(surnameLabel);
surnameFormGroup.appendChild(surnameInput);

// Create the phone number input group
const phoneFormGroup = document.createElement('div');
phoneFormGroup.classList.add('form-group');

const phoneLabel = document.createElement('label');
phoneLabel.setAttribute('for', 'phone');
phoneLabel.textContent = 'Phone Number';

const phoneInput = document.createElement('input');
phoneInput.type = 'text';
phoneInput.classList.add('form-control');
phoneInput.id = 'phone';
phoneInput.placeholder = 'Enter your phone number e.g 01234567890';
phoneInput.name = 'phone';
// phoneInput.pattern = '^[0-9]{6}|[0-9]{8}|[0-9]{10}$';
phoneInput.pattern = '^[0-9]{10}(?:[0-9]{1})?$';

// Append the phone label and input to the phone form group
phoneFormGroup.appendChild(phoneLabel);
phoneFormGroup.appendChild(phoneInput);

// Create the Email input group
const emailFormGroup = document.createElement('div');
emailFormGroup.classList.add('form-group');

const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email address';

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.classList.add('form-control');
emailInput.id = 'email';
emailInput.placeholder = 'Enter your email';

// Append the email label and input to the email form group
emailFormGroup.appendChild(emailLabel);
emailFormGroup.appendChild(emailInput);

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

// Append the form to the form container
formContainer.appendChild(form);

// Append the form container to the contact container in the document
document.getElementById('contactContainer').appendChild(formContainer);

// Add a listener for when the form is submitted 
form.addEventListener('submit', (event) => {
    // Stop the form from submitting the usual way
    event.preventDefault();
    // Show the confirmation modal (pop-up)
    $('#confirmationModal').modal('show');
     // Clear the form fields
     form.reset();

});


// const contactDiv = document.createElement ('div');
// contactDiv.id = 'contacts-div';
// contactDiv.innerHTML ='Contact Us Today';
// document.getElementById("contactContainer").appendChild(contactDiv);
// console.log("hello");