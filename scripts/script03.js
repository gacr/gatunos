
//  jquery

/*
Info.
    "margin": "20px",
    "padding":"10px",
    "width":"200px", 
    "height":"200px"
    "margin": "20px"
*/

// jquery llamando a una etiqueta
$("#caja").click( function(){
    $("#caja").css({"background":"red", 
                    "width":"500px", 
                    "height":"500px" });
});

// this esto o este, a lo que le estoy dando click cambie su css
$(".cajas").click( function(){
    $(this).css({"background":"magenta", 
    "width":"200px", 
    "height":"200px" })
});

// Llamando a una clase
$(".card-body").click( function(){
    $(this).css({"background":"orange",
    "color": "yellow"})
});


// Al hacer click en el boton cambie el tipo texto
$("#boton").click(function(){
    $("[type='text']").css({"background":"black"})
});


// Al hacer click en el boton cambie la etiqueta
$("#boton").click(function(){
    $("#texto_contrasena").css({"background":"magenta"})
});

// Addon Jquery Validate

//  $(function() {
//     $("#mi-formulario").validate
//         ({
//             rules: 
//             {
//             email: {required: true, email:true}
//             },
//             messages:
//             {
//                 email: {required:'el campo es requerido', email:'el formato es incorrecto'}
//             }

//          });
//  });


// Addon carousel .      

$(".card-slider").each(function(){
    function i(){r.removeAttr("style");
    var i=$(e[0]).outerWidth()*e.length;r.css("width",i)}var d=$(this),a=d.find(".inner"),r=d.find(".inner > ul"),e=d.find(".inner > ul > li"),n=d.find(".slider-nav button"),l=d.find('[data-direction="prev"]'),o=d.find('[data-direction="next"]');$(window).resize(function(){i()}),i(),n.on("click",function(){var i=$(this).data("direction"),d=parseInt(r.css("left"))||0,e=0,n=a.outerWidth(),t=d+n,s=r.outerWidth()+(d-n);"next"==i?(s<n?(e=d-s,o.addClass("disabled")):e=d-n,l.removeClass("disabled")):(0<=t?(e=0,l.addClass("disabled")):e=d+n,o.removeClass("disabled")),r.css("left",e)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmltYWwtY2FyZC1zbGlkZXIuanMiXSwibmFtZXMiOlsiJCIsImVhY2giLCJzZXRJdGVtV2lkdGgiLCIkc2xpZGVyTGlzdCIsInJlbW92ZUF0dHIiLCJjdXJXaWR0aCIsIiRzbGlkZXJJdGVtIiwib3V0ZXJXaWR0aCIsImxlbmd0aCIsImNzcyIsIiRzbGlkZXIiLCJ0aGlzIiwiJHNsaWRlckNvbnRhaW5lciIsImZpbmQiLCIkc2xpZGVyQnV0dG9uIiwiJHNsaWRlUHJldiIsIiRzbGlkZU5leHQiLCJ3aW5kb3ciLCJyZXNpemUiLCJvbiIsImRpciIsImRhdGEiLCJjdXJQb3MiLCJwYXJzZUludCIsIm1vdmV0byIsImNvbnRhaW5lcldpZHRoIiwiYmVmb3JlIiwiYWZ0ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQSxnQkFBQUMsS0FBQSxXQVNBLFNBQUFDLElBQ0FDLEVBQUFDLFdBQUEsU0FDQSxJQUFBQyxFQUFBTCxFQUFBTSxFQUFBLElBQUFDLGFBQUFELEVBQUFFLE9BQ0FMLEVBQUFNLElBQUEsUUFBQUosR0FYQSxJQUFBSyxFQUFBVixFQUFBVyxNQUNBQyxFQUFBRixFQUFBRyxLQUFBLFVBQ0FWLEVBQUFPLEVBQUFHLEtBQUEsZUFDQVAsRUFBQUksRUFBQUcsS0FBQSxvQkFDQUMsRUFBQUosRUFBQUcsS0FBQSxzQkFDQUUsRUFBQUwsRUFBQUcsS0FBQSwyQkFDQUcsRUFBQU4sRUFBQUcsS0FBQSwyQkE0Q0FiLEVBQUFpQixRQUFBQyxPQUFBLFdBQ0FoQixNQUVBQSxJQUVBWSxFQUFBSyxHQUFBLFFBekNBLFdBQ0EsSUFDQUMsRUFEQXBCLEVBQUFXLE1BQ0FVLEtBQUEsYUFDQUMsRUFBQUMsU0FBQXBCLEVBQUFNLElBQUEsVUFBQSxFQUNBZSxFQUFBLEVBQ0FDLEVBQUFiLEVBQUFMLGFBRUFtQixFQUFBSixFQUFBRyxFQUNBRSxFQUZBeEIsRUFBQUksY0FFQWUsRUFBQUcsR0FHQSxRQUFBTCxHQUNBTyxFQUFBRixHQUNBRCxFQUFBRixFQUFBSyxFQUNBWCxFQUFBWSxTQUFBLGFBSUFKLEVBQUFGLEVBQUFHLEVBSEFWLEVBQUFjLFlBQUEsY0FRQSxHQUFBSCxHQUNBRixFQUFBLEVBQ0FULEVBQUFhLFNBQUEsYUFJQUosRUFBQUYsRUFBQUcsRUFIQVQsRUFBQWEsWUFBQSxhQVFBMUIsRUFBQU0sSUFBQSxPQUFBZSIsImZpbGUiOiJzY3JpcHRzLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoXCIuY2FyZC1zbGlkZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG5cdHZhciAkc2xpZGVyID0gJCh0aGlzKSxcclxuXHRcdCRzbGlkZXJDb250YWluZXIgPSAkc2xpZGVyLmZpbmQoXCIuaW5uZXJcIiksXHJcblx0XHQkc2xpZGVyTGlzdCA9ICRzbGlkZXIuZmluZChcIi5pbm5lciA+IHVsXCIpLFxyXG5cdFx0JHNsaWRlckl0ZW0gPSAkc2xpZGVyLmZpbmQoXCIuaW5uZXIgPiB1bCA+IGxpXCIpLFxyXG5cdFx0JHNsaWRlckJ1dHRvbiA9ICRzbGlkZXIuZmluZChcIi5zbGlkZXItbmF2IGJ1dHRvblwiKSxcclxuXHRcdCRzbGlkZVByZXYgPSAkc2xpZGVyLmZpbmQoJ1tkYXRhLWRpcmVjdGlvbj1cInByZXZcIl0nKSxcclxuXHRcdCRzbGlkZU5leHQgPSAkc2xpZGVyLmZpbmQoJ1tkYXRhLWRpcmVjdGlvbj1cIm5leHRcIl0nKSxcclxuXHRcdFxyXG5cdFx0c2V0SXRlbVdpZHRoID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0JHNsaWRlckxpc3QucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG5cdFx0XHR2YXIgY3VyV2lkdGggPSAkKCRzbGlkZXJJdGVtWzBdKS5vdXRlcldpZHRoKCkgKiAkc2xpZGVySXRlbS5sZW5ndGg7XHJcblx0XHRcdCRzbGlkZXJMaXN0LmNzcyhcIndpZHRoXCIsIGN1cldpZHRoKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNsaWRlID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyICRidXR0b24gPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGRpciA9ICRidXR0b24uZGF0YShcImRpcmVjdGlvblwiKSxcclxuXHRcdFx0XHRjdXJQb3MgPSBwYXJzZUludCgkc2xpZGVyTGlzdC5jc3MoXCJsZWZ0XCIpKSB8fCAwLFxyXG5cdFx0XHRcdG1vdmV0byA9IDAsXHJcblx0XHRcdFx0Y29udGFpbmVyV2lkdGggPSAkc2xpZGVyQ29udGFpbmVyLm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHRsaXN0V2lkdGggPSAkc2xpZGVyTGlzdC5vdXRlcldpZHRoKCksXHJcblx0XHRcdFx0YmVmb3JlID0gKGN1clBvcyArIGNvbnRhaW5lcldpZHRoKSxcclxuXHRcdFx0XHRhZnRlciA9IGxpc3RXaWR0aCArIChjdXJQb3MgLSBjb250YWluZXJXaWR0aCk7XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRpZihkaXI9PVwibmV4dFwiKXtcclxuXHRcdFx0XHRpZihhZnRlciA8IGNvbnRhaW5lcldpZHRoKSB7XHJcblx0XHRcdFx0XHRtb3ZldG8gPSBjdXJQb3MgLSBhZnRlcjtcclxuXHRcdFx0XHRcdCRzbGlkZU5leHQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0XHQkc2xpZGVQcmV2LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdG1vdmV0byA9IGN1clBvcyAtIGNvbnRhaW5lcldpZHRoO1xyXG5cdFx0XHRcdFx0JHNsaWRlUHJldi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmKGJlZm9yZSA+PSAwKSB7XHJcblx0XHRcdFx0XHRtb3ZldG8gPSAwO1xyXG5cdFx0XHRcdFx0JHNsaWRlUHJldi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRcdCRzbGlkZU5leHQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0bW92ZXRvID0gY3VyUG9zICsgY29udGFpbmVyV2lkdGg7XHJcblx0XHRcdFx0XHQkc2xpZGVOZXh0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHNsaWRlckxpc3QuY3NzKCdsZWZ0JywgbW92ZXRvKTtcclxuXHRcdH07XHJcblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG5cdFx0c2V0SXRlbVdpZHRoKCk7XHJcblx0fSk7XHJcblx0c2V0SXRlbVdpZHRoKCk7XHJcblx0XHJcblx0JHNsaWRlckJ1dHRvbi5vbihcImNsaWNrXCIsIHNsaWRlKTtcclxufSk7XHJcbiJdfQ==




// Jquery Plugin: Direction Aware.      

$(function () {
    $(' #da-thumbs > li ').hoverdir();

    $('#show-default').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("show");
    });
    $('#show-left').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("show", "left");
    });

    $('#hide-default').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("hide");
    });
    $('#hide-right').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("hide", "right");
    });

    $('#set-options').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("setOptions", {hoverDelay: 300, inverse: true});
    });
    $('#reset-options').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("setOptions", {hoverDelay: 0, inverse: false});
    });

    $('#destroy').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("destroy");
    });

    $('#rebuild-default').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("rebuild");
    });
    $('#rebuild-options').on('click', function () {
        $(' #da-thumbs > li ').hoverdir("rebuild", {hoverDelay: 300, inverse: true});
    });
});

// addon jquery validator en archivo formulario.js
