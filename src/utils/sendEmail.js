document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita el envío del formulario

      // Obtiene los valores del formulario
      const name = form.name.value;
      const email = form.email.value;
      const subject = form.subject.value;
      const message = form.message.value;

      // Construye el enlace mailto
      const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo electrónico: ${email}\n\nMensaje:\n${message}`)}`;

      // Abre el enlace mailto
      window.location.href = mailtoLink;
    });
  });