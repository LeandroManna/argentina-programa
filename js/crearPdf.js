document.getElementById('pdfBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear documento PDF
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Nombre: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Mensaje: ${message}`, 10, 40);
    doc.save('contacto.pdf');
  });