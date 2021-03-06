;(function () {
  'use strict'

  $(".editar").on("click", handleEditar)
  $(".eliminar").on("click", handleEliminar)

  function handleEditar (e) {
    var id = e.currentTarget.dataset.id
    $.ajax({
      type: "GET",
      data: { id },
      url: "service/get.php",
      dataType: "JSON"
    })
    .done(function (snap) {
      console.log(snap)
      $("#id").val(snap.ced_usu)
      $("#cedula").val(snap.ced_usu)
      $("#nombre").val(snap.nom_usu)
      $("#apellido").val(snap.ape_usu)
      $("#email").val(snap.emi_usu)
      $("#telefono").val(snap.tel_usu)
      $("#celular").val(snap.cel_usu)
      $("#direccion").val(snap.dir_usu)

      $("#table-container").slideUp()
      $("#form-container").slideDown()
    })
  }

  function handleEliminar (e) {
    var id = e.currentTarget.dataset.id    

    $.ajax({
      type: "POST",
      data: { id },
      url: "service/eliminar.php"
    })
    .done(function (snap) {
      if(snap == 200) {
        toast("Se ha elimina con exito")
        $("#table-container").load("templates/table.php")
      }
    })
  }

})()