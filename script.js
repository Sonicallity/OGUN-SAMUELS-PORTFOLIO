// Typing animation for the hero section
const typingElement = document.getElementById('typing');
const roles = [
  'Web Developer.',
  'Software Engineer.',
  'Fintech Innovator( Aspiring ).',
  '/an Open Source Enthusiast.'
];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeRole() {
  if (typingForward) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === roles[roleIndex].length) {
      typingForward = false;
      setTimeout(typeRole, 1200); // pause at end
      return;
    }
  } else {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500); // pause at start
      return;
    }
  }
  setTimeout(typeRole, typingForward ? 85 : 35);
}
if (typingElement) typeRole();

// Contact form validation & "fake" submit
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Sending...';
    setTimeout(() => {
      formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
      contactForm.reset();
    }, 1200);
  });
}
