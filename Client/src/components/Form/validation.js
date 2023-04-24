export default function validateInputs(inputs){
    let errors = {};

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(inputs.username)) errors.username = 'Email invalido';

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(inputs.password)) errors.password = 'Contraseña invalida'
}