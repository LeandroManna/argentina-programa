
function validate() {
	// Obtener los valores de los campos de usuario y contraseña
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value
	// Verificar si las credenciales son correctas
	if (username === "leandro" && password === "manna") {
		// Redirigir a la página de contacto
		window.location.href = "../paginas/contactanos.html";
	} else {
		alert("Credenciales incorrectas. Intente nuevamente.");
	}
}
