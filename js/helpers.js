export function cantidadCaracteres(input){
    if(input.value.length >= 3 && input.value.length <=50){
        console.log('dato correcto');
        input.className = 'form-control is-valid';
        return true;
    }else{
        console.log('dato incorrecto');
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarNumeros(input){
    //validar con expresiones regulares xxxxxxxxxxxx@xxxxxx.com.xxx
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarDNI(input){
    let patron = /^[\d]{1,2}[\d]{6}$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

// ^[\d]{1,3}(\,[\d]{1,2})?$