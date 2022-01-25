
// $(function() {
//     $("#mi-formulario").validate()
//     });
// Se agrega metodo a JQuery Validator
// para que avise que se escriba sólo con letras
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Sólo letras por favor");






//código formulario
$(function() {
    $("#mi-formulario").validate({
        // Reglas
        rules: {
            nombre: { required: true, minlength: 2, maxlength: 20, lettersonly:true},
            apellido: { required: true, minlength: 2, maxlength: 20, lettersonly:true},
            email: { required:true, email: true},
            ano_nac: { required:true, min: 1500, max: 2001 },
            mes_nac: { required:true, min: 1, max:12 },
            dia_nac: { required:true, min:1, max:31},
            rut: { required:true, minlength: 5, maxlength: 8, digits: true},            
            rut2: { },
            telefono: { minlength: 2, maxlength: 15},
            mensaje: { required:true, minlength: 2},
            password: { required:true, minlength: 2},
            password2: { required:true, minlength: 2},
            region: { },
            ciudad: { },
            tipo_viv: { }
        },

        // Mensajes
        messages: {
            nombre: {
                required:'el campo es requerido', 
                minlength:'min 2 letras',
                maxlength:'máximo 20 letras'
            },
            apellido: {
                required:'el campo es requerido', 
                minlength:'min 2 letras',
                maxlength:'máximo 20 letras'
            },
            email: {
                required:'el campo es requerido', 
                email:'el formato es incorrecto'
            },
            rut: {
                required:'el campo es requerido', 
                minlength:'min 5 letras',
                maxlength:'máximo 8 letras',
                digits: 'Sólo números no letras'
            },
            rut2: {
                required:'el campo es requerido', 
                maxlength:'máximo 1 letras'
            },
            region: {
                required:'el campo es requerido', 
                
            },
            ano_nac: {
                required:'el campo es requerido', 
                min:'Número mayor a 1500',
                max:'año debe ser menor al año 2001'
            },
            mes_nac: {
                required:'el campo es requerido', 
                min:'Número mayor a 1',
                max:'Número menor a 12'
            },
            dia_nac: {
                required:'el campo es requerido', 
                min:'Número mayor a 1',
                max:'Número menor a 31'
            },
            region: {
                required:'el campo es requerido', 

            },
            ciudad: {
                required:'el campo es requerido', 

            },
            tipo_viv: {
                required:'el campo es requerido', 

            },
            password: {
                required:'Ingresa una contraseña', 
                minlength:'Largo insuficiente'
            },
            password2: {
                required:'Ingresa una segunda contraseña', 
                minlength:'Largo insuficiente x2'
            }
        }

    });
});


