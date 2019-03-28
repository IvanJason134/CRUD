class Main {
    constructor() {
    document.querySelector("#btnRegistrar").addEventListener("click", f1);
    document.querySelector("#btnLogin").addEventListener("click", login);

    function login() {
        let lsUsuarios = JSON.parse(localStorage.getItem("logins"));

        
    }
    
    function f1() {
    var correo = document.querySelector("#correo").value;
    var clave =  document.querySelector("#clave").value;
    console.log(correo);
    console.log(clave)
    

    let user = {
        correo: correo,
        clave: clave
    }

    let usuarios = JSON.parse(localStorage.getItem("logins"));

    if (usuarios == null) {
        usuarios = [];
    }
    
    usuarios.push(user);
    localStorage.setItem("logins", JSON.stringify(usuarios));
    
    }

}   
}
console.log(JSON.parse(localStorage.getItem("logins")))
let m = new Main()

