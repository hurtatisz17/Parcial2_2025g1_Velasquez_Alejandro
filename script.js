document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
  } else {
    alert('Formulario enviado correctamente 🎉');
    form.reset();
    form.classList.remove('was-validated');
  }
});
