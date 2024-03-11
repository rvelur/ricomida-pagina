const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#mail").click(function(){
    alert('Se ha enviado a su correo con exito')
});

$("#favorite").click(function(){
    alert('Se ha agregado a sus favoritos')
});

$("#ingredient").dblclick(function(){
    $(this).css("color", "red");
});

$("#preparation").dblclick(function(){
    $(this).css("color", "red");
});

$("#tarjetas .card-title").click(function(){
    $(this).next(".card-text").toggle("slow");
});