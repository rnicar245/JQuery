$(document).ready(function(){
    $("#guardar").click(function(evento){
        let valor = document.formul.valor.value;
        $("#division").data("midato",valor);
        $("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');
    });
    $("#leer").click(function(evento){
        valor = $("#division").data("midato");
        $("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
    });
    $("#eliminar").click(function(evento){
        $("#division").removeData("midato");
        $("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
    });
});