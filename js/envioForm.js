      // Obtener referencias a los elementos del formulario
      const form = document.getElementById('form');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitBtn = document.getElementById('submitBtn');
  
      // Agregar evento para el botón de enviar
      submitBtn.addEventListener('click', (event) => {
          event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
          // Obtener valores del formulario
          const name = nameInput.value;
          const email = emailInput.value;
          const message = messageInput.value;

          // Validar que los campos no estén vacíos
          if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor completa todos los campos.');
            return;
          }
  
          // Aquí iría el código para enviar el mensaje a través de Gmail o Mailgun
  
          // Mostrar mensaje de confirmación
          alert(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente y nos pondremos en contacto contigo a la brevedad.`);
          form.reset();
          location.reload();
          });