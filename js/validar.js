
var users = [
	{username: "leandro", password: "manna"},
	{username: "ana", password: "1234"},
	{username: "juan", password: "abcd"},
	{username: "maria", password: "5678"},
	{username: "pedro", password: "efgh"}
];

function validate() {
	// Obtener los valores de los campos de usuario y contraseña
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	// Verificar si las credenciales son correctas
	var valid = false;
	for (var i = 0; i < users.length; i++) {
		if (username === users[i].username && password === users[i].password) {
			valid = true;
			break;
		}
	}
	// Redirigir a la página de contacto o mostrar mensaje de error
	if (valid) {
		// Establecer una variable en el almacenamiento local que indica que el usuario está logueado
		localStorage.setItem("usuarioLogueado", "true");
		
		window.location.href = "../paginas/contactanos.html";
	} else {
		alert("Credenciales incorrectas. Intente nuevamente.");
	}
}
