// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Get Started button scrolls to About section
document.getElementById('get-started').addEventListener('click', function () {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var status = document.getElementById('form-status');
  status.textContent = 'Thank you, ' + name + '! Your message has been received.';
  this.reset();
});
