var agregar = $("#boton").on("click", function () {
    var taskVal = $("#task").val();
    var ul = $("ul");
    if (taskVal != "") {
        ul.append(`<li><span>${taskVal}</span>
        <button class ="remove">Borrar</button>
        <button class="botonEditar">Editar</button>
        <input type="text" class="editar"></li>`);
        cont++;
        $("#dos").html(`<span>Tareas totales: ${cont}</span>`);
        taskVal = "";
    } else if (taskVal == "") {
        var noTask = $("#tres").append(`<p>No agregaste ninguna tarea</p>`);
        setTimeout(function () {
            noTask.hide();
        }, 1000);
    }
})

var cont = $('li').length

$(document).on("click", ".remove", function () {
    $(this).parent("li").remove()
    cont--
    $("#dos").html(`<span>Tareas totales: ${cont}</span>`)
})

$(document).on("click", "span", function () {
    $(this).toggleClass("no");
})

$(document).on("click", ".botonEditar", function () {
    $(this).siblings("input").removeClass("editar")
})

$(document).on("keypress", "li input", function (event) {
    if (event.keyCode === 13) {
        var nueva = $(this).val();
        $(this).siblings("span").html(nueva);
        $(this).addClass("editar")
    }
})
