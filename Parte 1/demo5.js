$(function() {
    if ($("#mayoria_edad").prop("checked")){
        $("#formulariomayores").css("display", "block");
    }else{
        $("#formulariomayores").css("display", "none");
    }      
});