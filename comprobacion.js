function validacionExpre() {
    var emailInput = document.getElementById('email');
    var password = document.getElementById('password');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
      window.alert('Ingresa un correo electrónico válido.');    
      console.log('Ingresa un correo electrónico válido.');
      
      
      return false;

      


    } 
    
    
    if (password.value.length < 8) {
        window.alert('La contraseña no cumple con el minimo carcter requerido');
        console.log('Ingresa un correo electrónico válido.');
        return false;
      }


    else {
      window.alert('Sesion iniciada')
      return true;
    }  }


  