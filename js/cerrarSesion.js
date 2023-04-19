function cerrarSesion() {
    // Eliminamos todas las cookies relacionadas con la sesión
    document.cookie.split(";").forEach(function(cookie) {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Eliminamos el caché
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
      }
    });
    // Limpiamos la caché del navegador
    window.location.reload(true);
  
    // Redirigimos al usuario a la página de inicio de sesión
    window.location.href = "../paginas/login.html";
  }