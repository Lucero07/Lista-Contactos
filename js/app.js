(function () {
	var contador = 0;

	var crearTarjetaContacto = function () {

		$("#formulario").submit(crearContacto);
		$("#nombre").keyup(validarContacto);
		};

	var crearContacto = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $publicacion = $("#tarjeta1");
    var $nombre = $("#nombre");
    var $apellido = $("#apellido");
    var $celular = $("#celular");
    var $email = $("#email");
		var $botonContacto = $("#boton-agregar-contacto");
    var $nombreTitulo =$("#nombre-visual");
    var $acordion = $("#accordion");
		var nombreContacto = $nombre.val();
    var apellidoContacto =$apellido.val();
    var celularContacto =$celular.val();
    var emailContacto = $email.val();


		// Creamos elementos
    var $equis =$("<span>"+"&times;" + "</span>", {"aria-hidden":"true"})
    var $eliminar = $('<button type="button"/>',{"class":"close", "aria-label":"Close"});
    var $tarjeta = $("<div />",{"class": "panel panel-group"});
    var $encabezadoTarjeta = $("<div />",{"class": "panel-heading", "role":"tab"});
    var $tituloTarjeta = $("<h4 />",{"class":"panel-title"});
    var $enlaceTitulo =$("<a />", {"role":"button"});
    var $cuerpoTarjeta = $("<div />",);
    var $datosTarjeta = $("<div />",{ "class":"panel-body"});
    var $enlaceDatos =$("<a />");

    var id = "marcador-" + contador;
    var idcuerpoTarjeta = "collapse-" + contador;
    var idTituloTarjeta = "tituloTarjeta" +contador;
		// Personalizamos elementos

		$eliminar.id = id;
		$nombreTitulo.attr("for", id);
    $cuerpoTarjeta.id = idcuerpoTarjeta;
    $enlaceTitulo.attr("href",idcuerpoTarjeta);
    $enlaceTitulo.attr("aria-controls",idcuerpoTarjeta);
    $nombreTitulo.text(nombreContacto + " "+apellidoContacto);
	  $eliminar.click(borrarContacto);
    $publicacion.text("Celular: "+ celularContacto+ ", "+"Correo: "+ emailContacto);

		// Agregarlos al DOM}
    $enlaceDatos.append(emailContacto); // no lo inserta :(
    $datosTarjeta.append("Celular: "+ celularContacto+ ", "+"Correo: "+ emailContacto);
    $cuerpoTarjeta.append($datosTarjeta);
    $enlaceTitulo.append(nombreContacto + " " + apellidoContacto);
    $tituloTarjeta.append($enlaceTitulo);
    $encabezadoTarjeta.append($tituloTarjeta);
    $tarjeta.append($encabezadoTarjeta,$cuerpoTarjeta);
    $acordion.append($tarjeta);



    $eliminar.append($equis);
		$tarjeta.append($eliminar);


		// Borrar contenido de textarea
		// $nombre.val("");
    // $apellido.val("");
    // $celular.val("");
    // $email.val("");
		$botonContacto.attr("disabled", true);

		contador++;
	};

	var borrarContacto = function () {
		$(this).parent().remove();
	};

	var validarContacto = function () {
		var $addButton = $("#boton-agregar-contacto");
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

( function () {
  var colapso = function () {
      var titulo =$("'#tituloTarjeta' + contador");
      console.log(titulo);

    }
} )()
// $tituloTarjeta.click(function() {
//     $( "#accordion" ).accordion({
//       collapsible: true
//     });
//   })


	// Cuando carga la página
	$(document).ready(crearTarjetaContacto);
})();
