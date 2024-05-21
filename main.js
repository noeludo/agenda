$(document).ready(function() {
    // Mostrar todos los clientes inicialmente
    mostrarClientes(listaClientes);
  
    // Filtrar clientes según la entrada de búsqueda
    $("#buscarInput").on("keyup", function() {
      var textoBusqueda = $(this).val().toLowerCase();
      var campoBusqueda = $("#campoBusqueda").val();
      $(".tarjeta").each(function() {
        var valorCliente = $(this).find("." + campoBusqueda).text().toLowerCase();
        if (valorCliente.includes(textoBusqueda)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
  // Función para mostrar clientes
  function mostrarClientes(clientes) {
    var listaClientes = $("#listaClientes");
    listaClientes.empty();
    $.each(clientes, function(index, cliente) {
      var tarjeta = $("<div class='tarjeta'></div>");
      tarjeta.append("<h3 class='nombre'>" + cliente.nombre + "</h3>");
      tarjeta.append("<img src='" + cliente.imagen + "' alt='" + cliente.nombre + "'>");
      tarjeta.append("<p class='telefono'>Teléfono: " + cliente.telefono + "</p>");
      tarjeta.append("<p class='correo'>Correo: " + cliente.correo + "</p>");
      listaClientes.append(tarjeta);
    });
  }
  
  let listaClientes = [
    {
      "nombre": "Juan Pérez",
      "telefono": "6671234567",
      "correo": "juanperez@gmail.com",
      "imagen": "imagenes/juan.jpg"
    },
    {
      "nombre": "María González",
      "telefono": "6679876543",
      "correo": "mariagonzalez@gmail.com",
      "imagen": "imagenes/maria.jpg"
    },
    {
      "nombre": "Pedro Rodríguez",
      "telefono": "6673334444",
      "correo": "pedrorodriguez@gmail.com",
      "imagen": "imagenes/pedro.jpg"
    },
    {
      "nombre": "Ana Sánchez",
      "telefono": "6195556666",
      "correo": "anasanchez@hotmail.com",
      "imagen": "imagenes/ana.jpg"
    },
    {
      "nombre": "Laura López",
      "telefono": "6675557777",
      "correo": "lauralopez@gmail.com",
      "imagen": "imagenes/laura.jpg"
    }
  ];  