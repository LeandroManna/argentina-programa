      // Obtener todos los botones de comprar
      const comprarBtns = document.querySelectorAll('.comprar-btn');
    
      // Agregar un controlador de eventos a cada botón
      comprarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Mostrar el alert
          alert('Producto agregado al carrito');
        });
      });